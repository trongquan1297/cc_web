
import PageHeader from '@/app/[lang]/components/Home/PageHeader';
import { fetchAPI } from '@/app/[lang]/utils/fetch-api';
import PostList from '@/app/[lang]/components/Home/PostList';
import SnakesGame from '../components/SnakesGame';
import AboutMe from '../components/AboutMe';

async function fetchPostsByCategory(filter: string) {
    try {
        const token = process.env.NEXT_PUBLIC__API_TOKEN;
        const path = `/articles`;
        const urlParamsObject = {
            sort: { createdAt: 'desc' },
            filters: {
                category: {
                    slug: filter,
                },
            },
            populate: {
                cover: { fields: ['url'] },
                category: {
                    populate: '*',
                },
                authorsBio: {
                    populate: '*',
                },
            },
        };
        const options = { headers: { Authorization: `Bearer ${token}` } };
        const responseData = await fetchAPI(path, urlParamsObject, options);
        return responseData;
    } catch (error) {
        console.error(error);
    }
}

export default async function CategoryRoute({ params }: { params: { category: string } }) {
    const filter = params.category;
    const { data } = await fetchPostsByCategory(filter);
    const Page = ({ slug }: { slug: string }) => {
        switch (slug) {
          case 'about-me':
            return <AboutMe />;
          default:
            return <SnakesGame />;
        }
      };
    //TODO: CREATE A COMPONENT FOR THIS
    if (data.length === 0) {
        return <Page slug={filter} />;   
    };

    const categoryAttributes = data[0]?.attributes?.category?.data?.attributes;

    if (!categoryAttributes) {
    // handle the case when categoryAttributes is null or undefined
        return <div>No data</div>;
    }

    const { name, description } = data[0]?.attributes.category.data.attributes;

    return (
        <div>
            <PageHeader heading={name} text={description} />
            
            <PostList data={data} />
        </div>
    );
}

export async function generateStaticParams() {
    return [];
}
