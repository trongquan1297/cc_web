import { fetchAPI } from '@/Blog/[lang]/utils/fetch-api';
import Post from '@/Blog/[lang]/components/Post';
import type { Metadata } from 'next';

async function getPostBySlug(slug: string) {
    const token = 'cd799d9d816f9d60dbd316ad721c084f2b22fc142d613551d13ccaafe82ae1d028db98e4ea4339c919bab98fa0b05886c354e94f59f2d787004d1c29aedcbf144e6c499bf91c952b35c04efa0c357d0d231cc1adf205eecd3997dcc6be8a71382e28ce2b07a46ea38d74b8be6c41cce2bd920305623fd1ca37e2f3142ff1a267';
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            cover: { fields: ['url'] },
            authorsBio: { populate: '*' },
            category: { fields: ['name'] },
            blocks: { populate: '*' },
        },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

async function getMetaData(slug: string) {
    const token = 'cd799d9d816f9d60dbd316ad721c084f2b22fc142d613551d13ccaafe82ae1d028db98e4ea4339c919bab98fa0b05886c354e94f59f2d787004d1c29aedcbf144e6c499bf91c952b35c04efa0c357d0d231cc1adf205eecd3997dcc6be8a71382e28ce2b07a46ea38d74b8be6c41cce2bd920305623fd1ca37e2f3142ff1a267';
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        populate: { seo: { populate: '*' } },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response.data;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const meta = await getMetaData(params.slug);
    const metadata = meta[0].attributes.seo;

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription,
    };
}

export default async function PostRoute({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const data = await getPostBySlug(slug);
    if (data.data.length === 0) return <h2>no post found</h2>;
    return <Post data={data.data[0]} />;
}

export async function generateStaticParams() {
    const token = 'cd799d9d816f9d60dbd316ad721c084f2b22fc142d613551d13ccaafe82ae1d028db98e4ea4339c919bab98fa0b05886c354e94f59f2d787004d1c29aedcbf144e6c499bf91c952b35c04efa0c357d0d231cc1adf205eecd3997dcc6be8a71382e28ce2b07a46ea38d74b8be6c41cce2bd920305623fd1ca37e2f3142ff1a267';
    const path = `/articles`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const articleResponse = await fetchAPI(
        path,
        {
            populate: ['category'],
        },
        options
    );

    return articleResponse.data.map(
        (article: {
            attributes: {
                slug: string;
                category: {
                    slug: string;
                };
            };
        }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
    );
}
