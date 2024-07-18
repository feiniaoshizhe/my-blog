import { popularPosts } from "@/lib/placeholder-data";
import { fetcher, fetchUrl } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { Icons } from "../icons";

export default function PopularPosts() {
  //   const { data, error, isLoading } = useSWR(fetchUrl, fetcher);
  //   if (error) return <div>Failed to load</div>;
  //   //   if (isLoading) return <SkeletonCard />;
  //   return (
  //     <ul>
  //       {data?.map((post: { category: string; slug: string; title: string }) => (
  //         <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
  //           <li className=" flex items-center gap-2 group cursor-pointer py-2">
  //             {/* <Icons></Icons> */}
  //             <p>{post.title}</p>
  //           </li>
  //         </Link>
  //       ))}
  //     </ul>
  //   );

  return (
    <ul className=" overflow-auto">
      {popularPosts.map((post) => (
        <Link href={`/blog/`} key={post.title}>
          <li className=" flex items-center gap-2 group cursor-pointer py-2">
            <Icons.arrowRight className=" h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
