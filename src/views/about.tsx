
import HeroSection from "@/components/Hero";
import AboutHeroImage from '@/assets/aboutHero.jpg';
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import Navbar from "@/components/Navbar";
import Footer from "@/layout/footer";
import BrandStory from "@/components/BrandStory";
import Brand from '@/assets/brand.webp';
import Values from "@/components/Values";
import Principles from "@/components/Principles";
import Craft from "../components/Craft";
import MeetTheTeam from "@/components/Team";
import Sustainability from "../components/Sustainability";
import FutureGoals from "@/components/FutureGoals";
import FAQs from "@/components/FAQs";

export default function About() {
    return (
        <>
            <Navbar />
            <HeroSection
                backgroundImage={AboutHeroImage}
                title='About Abila Nuts'
                subtitle='Get in depth with us'

            />
            <Mission statement="To provide the finest quality peanut butter blends that delight and nourish our customers." />
            <Vision statement="To inspire a love for healthy, delicious, and sustainable peanut butter products accessible to everyone." />
            <BrandStory 
                story="Our journey began with a passion for high-quality ingredients and a love for the wholesome, nutty flavor of pure peanut butter. Over the years, we've refined our process to bring you the very best blends, crafted with care and a commitment to sustainability."
                image={Brand} // Optional image path for visual storytelling
            />
            <Values values={[
                "Quality: We prioritize high-quality ingredients.",
                "Sustainability: We commit to sustainable practices.",
                "Community: We support our local communities."
            ]} />
            <Principles principles={[
                "Integrity: We believe in honesty and transparency.",
                "Innovation: We embrace creativity and improvement.",
                "Customer Focus: We put our customers first."
            ]} />
            <Craft 
                ingredients={["100% Roasted Peanuts", "Sea Salt", "Natural Sweeteners (optional)"]}
                production="Our peanut butter is made using a small-batch process to ensure maximum freshness and flavor. We roast our peanuts to perfection before grinding them into a smooth, creamy texture."
                healthBenefits={[
                "Rich in Protein: Supports muscle growth and repair.",
                "Heart-Healthy Fats: Promotes cardiovascular health.",
                "Packed with Nutrients: Contains vitamins and minerals essential for overall health."
                ]}
            />
            <MeetTheTeam 
                members={[
                {
                    name: "John Doe",
                    position: "CEO",
                    description: "Passionate about healthy eating and sustainable practices.",
                    image: "path_to_john_image.jpg", // Provide your image path here
                },
                {
                    name: "Jane Smith",
                    position: "Product Manager",
                    description: "Expert in product development and customer satisfaction.",
                    image: "path_to_jane_image.jpg", // Provide your image path here
                },
                {
                    name: "Alice Johnson",
                    position: "Marketing Director",
                    description: "Creative marketer with a love for storytelling.",
                    image: "path_to_alice_image.jpg", // Provide your image path here
                },
                ]}
            />
            <Sustainability 
                practices={[
                "Using eco-friendly packaging materials.",
                "Implementing energy-efficient production processes.",
                "Sourcing ingredients from sustainable farms."
                ]}
                communityInitiatives={[
                "Supporting local food banks with donations.",
                "Organizing community clean-up events.",
                "Participating in health and wellness workshops."
                ]}
                partnerships={[
                "Collaborating with environmental organizations.",
                "Partnering with local farmers for ingredient sourcing.",
                "Working with charities to promote healthy eating."
                ]}
            />
            <FutureGoals 
                goals={[
                { year: 2025, description: "Launch new flavors and product lines." },
                { year: 2026, description: "Expand distribution to international markets." },
                { year: 2027, description: "Achieve zero waste in our production process." },
                { year: 2028, description: "Become a certified organic brand." },
                ]}
            />
            <FAQs 
                faqs={[
                { question: "What ingredients are in your peanut butter?", answer: "Our peanut butter is made from 100% roasted peanuts and a pinch of salt." },
                { question: "Is your peanut butter organic?", answer: "Yes, we offer organic options for our peanut butter." },
                { question: "How should I store peanut butter?", answer: "We recommend storing it in a cool, dry place. You can refrigerate it for longer freshness." },
                { question: "Do you have nut-free options?", answer: "Currently, we do not offer nut-free options." },
                ]}
            />
            <Footer />
        </>
    );
}