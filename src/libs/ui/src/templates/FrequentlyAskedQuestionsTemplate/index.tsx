import { FrequentlyAskedQuestions } from '@ui/organisms/FrequentlyAskedQuestions';
import coursesData from '@utils/CoursesData';

function FrequentlyAskedQuestionsTemplate() {
  return (
    <div className="xl:w-[90rem] w-full lg:px-[3.5rem] mx-auto lg:mt-14 mt-5 px-6">
      <FrequentlyAskedQuestions coursesData={coursesData} />
    </div>
  );
}

export default FrequentlyAskedQuestionsTemplate;
