import {
  CustomerReviews,
  Footer,
  Hero,
  Services,
  Kitchens,
  AboutUs,
  TopRestaurants,
} from "./sections";
import { Nav } from "./libs/common/index.js";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <TopRestaurants />
      </section>
      <section className="padding">
        <Kitchens />
      </section>
      <section className="padding">
        <AboutUs />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="bg-blue-100 padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
