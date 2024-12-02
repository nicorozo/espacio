import Hero from "./pages/main/Hero";
import TextBlock from "./components/TextBlock/TextBlock";
import TabsMenu from "./components/Showcase/TabsMenu";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <TextBlock>
        <h2>
          Get to know what we can do{" "}
          <span style={{ color: "var(--tertiary)", whiteSpace: "nowrap" }}>
            &#91; record &#93;{" "}
          </span>{" "}
          for you!
        </h2>
        <p>
          With your needs and our skills, all you need to do is text us for more
          detials!
          <br></br>
          <br></br>
          Together we can make it last forever!
        </p>
      </TextBlock>
      <TabsMenu></TabsMenu>
    </main>
  );
}
