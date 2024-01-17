"use client";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "./utils/fetch-api";

import Loader from "./components/Loader";
import PostList from "./components/PostList";
import PageHeader from "./components/PageHeader";

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

function Blog() {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);
    try {
      const token = 'cd799d9d816f9d60dbd316ad721c084f2b22fc142d613551d13ccaafe82ae1d028db98e4ea4339c919bab98fa0b05886c354e94f59f2d787004d1c29aedcbf144e6c499bf91c952b35c04efa0c357d0d231cc1adf205eecd3997dcc6be8a71382e28ce2b07a46ea38d74b8be6c41cce2bd920305623fd1ca37e2f3142ff1a267';
      const path = `/articles`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        populate: {
          cover: { fields: ["url"] },
          category: { populate: "*" },
          authorsBio: {
            populate: "*",
          },
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[] ) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function loadMorePosts(): void {
    const nextPosts = meta!.pagination.start + meta!.pagination.limit;
    fetchData(nextPosts, Number(6));
  }

  useEffect(() => {
    fetchData(0, Number(6));
  }, [fetchData]);

  if (isLoading) return <Loader />;

  return (
    <div>
      <PageHeader heading="My Blog" text="Checkout Something Cool" />
      <PostList data={data}>
        {meta!.pagination.start + meta!.pagination.limit <
          meta!.pagination.total && (
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
              onClick={loadMorePosts}
            >
              Load more posts...
            </button>
          </div>
        )}
      </PostList>
    </div>
  );
}

export default Blog;