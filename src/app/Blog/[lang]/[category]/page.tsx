import PageHeader from '@/Blog/[lang]/components/PageHeader';
import { fetchAPI } from '@/Blog/[lang]/utils/fetch-api';
import PostList from '@/Blog/[lang]/components/PostList';

async function fetchPostsByCategory(filter: string) {
    try {
        const token = 'cd799d9d816f9d60dbd316ad721c084f2b22fc142d613551d13ccaafe82ae1d028db98e4ea4339c919bab98fa0b05886c354e94f59f2d787004d1c29aedcbf144e6c499bf91c952b35c04efa0c357d0d231cc1adf205eecd3997dcc6be8a71382e28ce2b07a46ea38d74b8be6c41cce2bd920305623fd1ca37e2f3142ff1a267';
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

    //TODO: CREATE A COMPONENT FOR THIS
    if (data.length === 0) return <div>Not Posts In this category</div>;

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
