import Container from "../Components/Container";
import SkillsContent from "../Components/skills/SkillsContent";
import SkillsOrbit from "../Components/skills/SkillsOrbit";
import FadeInView from "../Components/FadeInView";
const SkillsPage = () => {

  return (
<FadeInView>
    <section id="skills" className="bg-[#020617] py-12">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div className="order-1">
            <SkillsContent />
          </div>

          {/* Right */}
          <div className="order-2 flex justify-center">
            <SkillsOrbit />
          </div>

        </div>
      </Container>
    </section>
</FadeInView>
  );
};

export default SkillsPage;