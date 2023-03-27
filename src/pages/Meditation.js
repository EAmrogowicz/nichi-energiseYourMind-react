import PageContainer from "../components/PageContainer";
import MotionPage from "../components/Motion/MotionPage";

import MeditationPrompt from "../components/Meditate/MeditationPrompt";
import { MeditationItems } from "../components/Meditate/MeditationItems";

export default function Meditation() {
  return (
    <PageContainer size="md">
      <MotionPage>
        <MeditationPrompt meditations={MeditationItems} />
      </MotionPage>
    </PageContainer>
  );
}
