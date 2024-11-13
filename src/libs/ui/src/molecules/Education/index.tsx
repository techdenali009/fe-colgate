
import Paragraph from '@ui/atoms/Paragraph/paragraph';
import AccordionItem from '../AccordianItem';
import { HeaderLabel } from '../HeaderLabel';
import './Education.styles.scss'
import Anchor from '../Anchor';
function Education() {
  return (
    <div className="mb-14">
      <HeaderLabel className="lg:!text-[2.375rem] text-2xl font-bold font-HeroNewBold mb-6 leading-none text-[#555555] dark:text-appTextColor">
        Education
      </HeaderLabel>
      <div className="items-center">
        <AccordionItem
          title="How do I sign up for classes?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !py-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>
              You can sign up for the Advantage Class on our website. For all
              other classes please call 877.PCA.PEEL [722.7335] and one of our
              Education Specialists will assist you.
            </Paragraph>
          </div>
        </AccordionItem>
        <AccordionItem
          title="I need to cancel a class I'm signed up for. How do I do that?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>
            To avoid our $100 cancellation fee please call 877.PCA.PEEL [722.7335] within 48 hours of your scheduled class.
            </Paragraph>
          </div>
        </AccordionItem>

      
        <AccordionItem
          title="  I took the Advantage Class. When will I receive my Certificate?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>
            You will receive your PCA SKIN Certified Professional certificate on the day of the class. If you did not, please call 877.PCA.PEEL [722.7335] and an education specialist will assist you.
            </Paragraph>
          </div>
        </AccordionItem>

      
        <AccordionItem
          title="When will my PCA SKIN Certification expire?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>
            In order for skin health professionals to purchase PCA SKIN professional products you must complete the PCA Skin Advantage Course. Once you have attended this 8 hour course, your certification with PCA Skin will never expire.
            </Paragraph>
            <Paragraph>&nbsp;</Paragraph>
            <Paragraph>However, if you would like to continue to further your knowledge with PCA Skin products, the PCA Academy offers a variety of additional education courses to expand your skill set. Learn more about our exciting education offerings here: <Anchor href="#" className="!text-[1rem]">Education page</Anchor></Paragraph>
          </div>
        </AccordionItem>

      
        <AccordionItem
          title="I attend the Advantage class on Sunday. When will I receive my kit?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>Your kit will be shipped out within 5 business days from when you attended the class.</Paragraph>
          </div>
        </AccordionItem>

       
        <AccordionItem
          title=" I used to be able to see my online courses when I logged into my professional account but I am no longer able to see them."
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>Ensure that you are signing in with the email account you used during registration. Using a different email may prevent your online classes from appearing.</Paragraph>
            <Paragraph>&nbsp;</Paragraph>
            <Paragraph>If you are still unable to see your courses, please call 877.PCA.PEEL [722.7335] to speak with one of our education specialists. They will be able to assist you and help resolve any issues you may be experiencing with accessing your online courses.</Paragraph>
          </div>
        </AccordionItem>

      
         
        <AccordionItem
          title="What education support do you offer for my students?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>As a PCA SKIN Partnership and Associate School, we provide various education support options for your students. We have developed specific training courses to aid your undergraduate and masters level students in achieving success during their academic journey and beyond. By partnering with PCA SKIN, each of your students will graduate as PCA SKIN Certified Chemical Peel Experts, equipped with specialized knowledge and skills in this field. Our goal is to empower your students with valuable training and certifications to enhance their career prospects and expertise in the industry.</Paragraph>
          </div>
        </AccordionItem>

      
        <AccordionItem
          title="  Do you offer training for my instructors?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>We offer on campus training, as well as extensive online courses for your instructors to complete at their leisure. Your instructors are encouraged to attend every class we hold on your campus.</Paragraph>
          </div>
        </AccordionItem>

      
        <AccordionItem
          title="Do I get product discounts?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>PCA SKIN Partnership and Associate schools are eligible for additional product discounts and promotions.</Paragraph>
          </div>
        </AccordionItem>

       
        <AccordionItem
          title=" Do you offer student kits?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>We offer three student kits for our Partnership Schools. The Introduction to Aesthetics Kits and Masters Kits are designed to assist your student to become familiar with PCA SKIN products and set them on a path to success during their training. PCA SKIN offers a third kit that will assist your students post-graduation, giving them a head start as a PCA SKIN Certified Professional. Associates Schools have access to condensed kits in conjunction with the purchase of training.</Paragraph>
          </div>
        </AccordionItem>


      
        <AccordionItem
          title="What makes you different from the other skincare lines?"
          titleClassName="text-base font-HeroNewLight !pb-0 !pt-6 !px-2 lg:w-full w-56"
          containerClassName="education-svgIconThickness"
          contentClassName="pt-4  pb-6 px-6  border-t italic"
          className="!p-0 !pb-4 !px-4 "
          svgIconClass='!w-[2rem] !h-[0.85rem] mt-6 pl-1.5'
        >
          <div>
            <Paragraph>Partnering with PCA SKIN will differentiate your esthetics program. We view education as the cornerstone to achieving success for every professional. PCA Skin is dedicated to helping not only you, but each of your students achieve that success through ever evolving educational courses and advanced scientific formulas.</Paragraph>
          </div>
        </AccordionItem>

      </div>
    </div>
  );
}

export default Education;