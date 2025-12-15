import NavbarSection from "@/components/Blog/NavbarSection";
import BlogGrid from "@/components/Blog/BlogGrid";
import Footer from "@/components/Footer";
import { getBlogData } from "@/server/blog";
import { getServices } from "@/server/services";

export default async function BlogPage() {
    const services = await getServices();
    
    const blogs = await getBlogData();
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