import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Programs />
        <Trainers />
        <Pricing />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
