import * as React from "react";
import BlogCard from "@/components/BlogCard/BlogCard";

export default function Blog() {
    return (
        <>
        <h1 className="px-1 mb-8 font-bold text-center capitalize text-md text-dark">
            Welcome to my personal web development blog!
        </h1>
        <p className="mb-20 text-xs text-center">
            You can expect to read articles related to the many different topics covered 
            in the broad spectrum of front-end web development.
        </p>
        <section className="grid grid-cols-1 py-12 gap-x-2 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            <BlogCard 
            gridSpan="col-span-2" 
            imgHeight="h-3/5"
            />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </section>
        </>
    );
}