import NavbarSection from "@/components/Blog/NavbarSection";
import BlogGrid from "@/components/Blog/BlogGrid";
import Footer from "@/components/Footer";
import { getBlogData } from "@/server/blog";

export default async function BlogPage() {
    const { blogs, services } = await getBlogData();
    return (
        <div>
            <NavbarSection services={services} />
            <main className="flex flex-col justify-center items-center w-full lg:w-2/3 mx-auto">
            <BlogGrid blogs={blogs} />
            </main>

            <Footer />
            {/* Additional about page content can go here */}
        </div>
    );
}