import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";


import {
  getPostBySlug,
  getPosts,
} from "@/lib/blog";


import { Container } from "@/components/ui/Container";
import CategoryBadge from "@/components/blog/CategoryBadge";



type Props = {
  params: Promise<{
    slug: string;
  }>;
};





export function generateStaticParams() {

  const posts = getPosts();


  return posts.map((post)=>({

    slug: post.slug,

  }));

}





export async function generateMetadata(
  {params}: Props
): Promise<Metadata> {


  const {slug} = await params;


  const post = getPostBySlug(slug);



  if(!post){

    return {
      title: "Artigo não encontrado",
    };

  }



  return {

    title: `${post.title} | Marllon Panisset`,

    description:
      post.excerpt,

  };

}







export default async function BlogPostPage({
  params,
}: Props){


  const {slug} = await params;



  const post = getPostBySlug(
    slug
  );



  if(!post){

    notFound();

  }



  return (

    <article className="py-32">


      <Container>


        <div className="max-w-3xl mx-auto">



        <CategoryBadge
            category={post.category}
        />




          <h1 className="
            mt-6
            text-4xl
            md:text-5xl
            font-bold
            text-white
            leading-tight
          ">
            {post.title}
          </h1>





          <p className="
            mt-6
            text-muted-foreground
            leading-relaxed
          ">
            {post.excerpt}
          </p>





          <div className="
            mt-6
            flex
            flex-wrap
            gap-4
            text-sm
            text-muted-foreground
          ">


            <span>
              {post.date}
            </span>



            {post.readingTime && (

              <span>
                • {post.readingTime}
              </span>

            )}


          </div>






          {post.tags?.length > 0 && (

            <div className="
              mt-6
              flex
              flex-wrap
              gap-2
            ">


              {post.tags.map((tag)=>(

                <span
                  key={tag}
                  className="
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    bg-primary/10
                    text-primary
                    border
                    border-primary/20
                  "
                >

                  #{tag}

                </span>

              ))}


            </div>

          )}







          <div className="
            mt-12
            border-t
            border-border/40
            pt-10
            prose
            prose-invert
            max-w-none
          ">


            <MDXRemote
              source={post.content}
            />



          </div>




        </div>



      </Container>



    </article>

  );

}