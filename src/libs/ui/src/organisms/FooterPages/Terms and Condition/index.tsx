import { Heading } from '@ui/molecules/Heading';
import { Paragraph } from '@ui/molecules/Paragraph';
import React from 'react';
import './termsCondition.styles.scss'
import { HeaderLabel } from '@ui/molecules/HeaderLabel';


const TermsCondition: React.FC = () => {
  return (
    <div className='flex flex-col items-center'>

      <Heading className='lg:!text-[2.375rem] !leading-10 !font-HeroNewUltraLight 2xs:text-[1.75rem]'>
        Terms And Conditions
      </Heading>

      <Heading className='!text-[1.25rem] leading-10 !font-bold !font-HeroNewBold justify-center items-center !mb-20 !tracking-normal'>
        Terms of Use
      </Heading>

      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px]  !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          1. Overview
        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          These terms of use (&quot;Terms of Use&quot;) set forth the terms upon which Colgate-Palmolive Company or its subsidiary entities (&quot;Colgate,&quot; &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) provide you with access to our network of websites (collectively, the &quot;Sites&quot; or &quot;Site&quot;) and the related services, products for purchase, features, content, software and mobile applications created by us (each, an &quot;App&quot;) to which these Terms of Use are linked (collectively, the &quot;Service&quot;). In these Terms of Use the use of &quot;you&quot;, &quot;user&quot; or &quot;your&quot; means any person or entity using the Service, provided that if such person is under the age of 18, &quot;you,&quot; &quot;your&quot; and &quot;user&quot; also includes such person&apos;s parent or legal guardian.          
        </Paragraph>
        <Paragraph className='termsParagraph'>PLEASE REVIEW THE FOLLOWING TERMS CAREFULLY BEFORE USING THIS SERVICE OR ANY OTHER COLGATE OR COLGATE SUBSIDIARY OR RELATED ENTITY SERVICE.</Paragraph>
        <Paragraph className='termsParagraph'>
          By visiting or browsing a Site, downloading an App, registering for a Site, contributing content to a Site or making a purchase through a Site or using the Service in any way, you agree to be bound by these Terms of Use, which form a binding agreement between you and us. If you do not agree to these Terms of Use, do not access or use the Service. Certain elements of the Service may be subject to additional terms and conditions from time to time which are incorporated into these Terms of Use by reference.
        </Paragraph>
        <Paragraph className='termsParagraph'>Colgate may revise the Terms of Use periodically and will notify you of a change by updating the “Last Updated” date above and/or by posting such change in your App notifications. By continuing to use the Service after revisions become effective, you agree to be bound by the revised Terms of Use. If you do not agree to the new Terms of Use, please stop using the Service. Unless otherwise noted herein, the Service is offered for personal and noncommercial use, or, in the case of dental or skincare professionals or veterinarians, in their practice.</Paragraph>
        <Paragraph className='termsParagraph'>When you visit the Site or provide information to Colgate, you are communicating with us electronically. In so doing, you consent to receive communications from us electronically. We may communicate with you by e-mail or by posting notices on the Site. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communication be in writing.</Paragraph>
        <Paragraph className='termsParagraph'>THESE TERMS OF USE CONTAIN A MANDATORY ARBITRATION PROVISION THAT, AS FURTHER SET FORTH BELOW, REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR ANY OTHER COURT PROCEEDINGS OR CLASS ACTIONS OF ANY KIND.</Paragraph>
      </div>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          2. Eligibility
        </HeaderLabel>

        <Paragraph className='termsParagraph mt-[24px]'>
          The Service is offered and available to users who are 18 years of age or older. By using the Service, you represent and warrant that you are of legal age to form a binding contract with Colgate and meet all of the eligibility requirements set forth herein. requirements. If you are under the age of 18 or the legal age to form a binding contract, make sure that your parent or legal guardian reads and agrees with the Terms of Use on your behalf, as your parent or legal guardian shall be fully responsible for your compliance with these Terms of Use. If you do not meet all of these requirements, you must not access or use the Service.
        </Paragraph>
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>



      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          3. License; Reservation of Rights; Intellectual Property
        </HeaderLabel>

        <Paragraph className='termsParagraph mt-[24px]'>
          <em><strong className='boldText'>3.1 </strong><u>Limited License to Use the Service.</u> Subject to your compliance with these Terms of Use, Colgate hereby grants to you a limited, personal, non-exclusive, non-transferable, license to use the Service solely for your own personal purposes, or, in the case of dental professionals, in their dental practice. If we provide you with an App for download, you may download a single copy to your mobile device for your own personal use. Except for the licenses and rights expressly granted under these Terms of Use, no licenses or rights are granted by Colgate to you hereunder, by implication, estoppel or otherwise. All such other licenses and rights are reserved to Colgate. The Apps may now or in the future be made available through or downloaded from third party App stores. By downloading or otherwise accessing the Apps via third party App stores, you are also agreeing to be bound by the applicable App store&apos;s terms of service.  </em>
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>3.2 </strong><u>License Restrictions.</u> Except as expressly permitted herein, you shall not (i) copy or modify the Service for any purpose, including for the purposes of testing the vulnerability of any Colgate system or network or breaching any security or authentication measures; (ii) reverse-engineer, decompile, modify, translate, disassemble or discover the source code for all or any portion of the Service; (iii) distribute, disclose, market, rent, lease or otherwise transfer the Service to any other person or entity; (iv) interfere with, or attempt to interfere with, the access of any user, host or network; (v) violate any applicable law or regulation; or (v) use the Service to, or permit, enable or assist a third party to create competing products or services.</em>
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='termsParagraph'>
          <em><b className='boldText'>3.3 </b><u>Colgate Intellectual Property Rights. </u> Colgate retains all intellectual property rights in and to the Service and all related documentation interest (including all copyrights, patents, service marks, trademarks and other intellectual property rights), including, but not limited to, any and all updates, enhancements, customizations, revisions, modifications, future releases and any other changes thereto, and all related information, material and documentation. Except for rights specifically provided in these Terms of Use, you hereby assign to Colgate all other intellectual property rights you may now or hereafter possess in the Service and related documentation, and all derivative works and improvements thereof, and agree to execute all documents, and take all actions, that may be necessary to confirm such rights. You also agree not to remove all proprietary marks, legends and patent and copyright notices that appear on the Service and any related documentation delivered to you by Colgate and all whole or partial copies thereof.</em>
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          4. Registration and Account Creation

        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          Our Service may allow you to register or create an account (“Account”) in order to access certain features or content, make a Post (as defined below), make a purchase or participate in Reward Programs (as defined below). If you create an Account, you agree to provide accurate and complete information about yourself and to maintain and update such information so it remains accurate and complete. You agree not to register for more than one Account for yourself on each of our Sites or Apps. You are responsible for maintaining the confidentiality of your Account log-in and password information and for any activities that take place through your Account. We are not liable for any harm caused or related to the theft or misappropriation of your Account information or your authorization of anyone else to use your Account information. You agree to immediately notify us if you become aware of or believe there is or may have been any unauthorized use of your Account or if you wish to deactivate your Account due to security concerns.
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular !mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          5. Transactions

        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          If you make a purchase through our Service, you shall also be bound by Terms of Sale which are incorporated herein by reference.
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          6. User Content and Posting on the Services
        </HeaderLabel>

        <Paragraph className='termsParagraph mt-[24px]'>
          <em><strong className='boldText'>6.1 </strong> Our Service may enable you to submit, provide, transmit, exchange, communicate and display (a &quot;Post&quot; or &quot;Posting&quot;) content, reviews, ratings, photos, videos, messages or other information (&quot;User Content&quot;). Our Service may also provide access to content aggregated from third party sites, such as product reviews (&quot;Third Party Content&quot;).</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>6.2</strong> Subject to our Privacy Policy, all User Content that you Post on this Service will be treated as non-confidential and non-proprietary to you and may be viewed by you and/or other users of the Service. We cannot guarantee that other users will not copy, modify, distribute or otherwise use the User Content that you share. You also agree that we, our affiliates and our licensees are free to use any ideas, concepts, know-how or techniques contained in any User Content you send to us for any purpose whatsoever, including, but not limited to, developing, manufacturing and marketing products, services and content using such information, without any credit, notice, approval or compensation to you. We welcome user comments, information and submissions. If you want to formally submit your idea, please use our portal located at<a href='https://colgatepalmolive.yet2.com' className='text-appTheme'> https://colgatepalmolive.yet2.com </a>.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.3 </strong>By Posting User Content, you represent and warrant that you have the right to grant, and do grant, to Colgate a revocable, perpetual, unlimited, non-exclusive, fully paid, royalty-free, transferable, worldwide license (with a right to sublicense) to use, copy, perform, display, share with vendors, and distribute such User Content to prepare derivative works of, or incorporate into other works and into any form, medium, or technology, now known or hereafter developed, throughout the world, and to grant and authorize sublicenses of the foregoing, all without any notification or compensation to you. You also hereby grant each user of the Service a non-exclusive license to access your User Content through the Service, and to use, edit, modify, reproduce, distribute, prepare derivative works of, display and perform such User Content. We have the right, but not the obligation, to use your user name (and real name, image, likeness or other identifying information, if provided in connection with User Content), city and state in connection with any publication of your User Content. Do not Post or provide any User Content that you do not wish to license to us.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.5 </strong>By submitting any User Content to Colgate, you represent and warrant that:</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.5.1 </strong>you are the sole author and owner of the intellectual property rights in the User Content;</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.5.2 </strong> all User Content that you post is accurate and complete;</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.5.3 </strong>you are at least 18 years old;</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.5.4 </strong>use of the User Content you supply does not violate these Terms of Use or Colgate’s Privacy Policy and will not cause injury to any person or entity;</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.5.5 </strong>you have made proper disclosures regarding any material connections between you and Colgate</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.5.6 </strong>your User Content reflects your honest and truthful opinion regarding your experience with Colgate’s products; and</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.5.7 </strong>you are either (1) not a Colgate employee, or (2) a Colgate employee and have clearly and conspicuously disclosed this in your review.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.6 </strong>You further represent and warrant that you have all permissions and licenses necessary to grant such rights to us, including, by way of example,&quot;right of publicity&quot; and other rights relating to the reproduction of names and/or likenesses of any individuals which appear in such User Content. You may revoke any of the foregoing licenses by deleting the applicable licensed User Content pursuant to the instructions provided on our Service. However, we may retain copies of such User Content for non-public, non-commercial, archival use and you acknowledge and agree that to the extent that we may have already distributed your User Content to a third party we have no obligation to retrieve or cause such third party to cease using such User Content.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7 </strong>You are solely responsible for the User Content that you Post. You agree not to Post any content that:</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.1 </strong>is unrelated to the products and services offered by or available at Colgate’s Site or Apps;</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.2 </strong>is offensive to the community, such as content that promotes racism, bigotry, hatred or physical harm of any kind against any group, organization or individual;</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.3 </strong>harasses or advocates harassment of another person, group or organization;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.4 </strong>involves the transmission of “junk mail,” “chain letters,” or unsolicited mass mailing or “spamming,” or is an advertisement or refers to other products, offers, or websites;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.5 </strong>involves information that you know is false, inaccurate, misleading or promotes illegal activities or conduct that is abusive, threatening, obscene, defamatory or libelous;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.6 </strong>infringes any third party&apos;s copyright, patent, trademark, trade secret or other proprietary rights or rights of publicity or privacy, or misappropriates the name and/or likeness of another;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.7 </strong>includes material that is defamatory, libelous, hateful, abusive, indecent, vulgar, sexist, racially or religiously biased or offensive;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.8 </strong>contains nudity or depicts sexual activities or contains sexually suggestive content, including photographs, or is pornographic or otherwise inappropriate or obscene;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.9 </strong> contains any material that depicts, describes or threatens violence, or is unlawfully threatening or unlawfully harassing to any individual, partnership or corporation;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.10 </strong>contains words or descriptions that are reasonably considered vulgar, course or crude;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.11 </strong>cfor which you were compensated or granted any consideration by any third party;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.10 </strong>contains words or descriptions that are reasonably considered vulgar, course or crude;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.11 </strong>for which you were compensated or granted any consideration by any third party;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.12 </strong>that includes any information that references other websites, addresses, email addresses, contact information or phone numbers, or any other personally identifiable information for you or any third party;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.13 </strong>that includes a critical or spiteful comment on other Content posted on any Colgate website page or their authors;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.14 </strong>for which you were compensated or granted any consideration by any third part
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.15 </strong>that includes any information that references other websites, addresses, email addresses, contact information or phone numbers, or any other personally identifiable information for you or any third party;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.16 </strong>solicits passwords or personal identifying information from other users;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.17 </strong>violates any law, statute, ordinance or regulation (including, but not limited to, those governing export control, consumer protection, unfair competition, anti-discrimination, false advertising or guidance relating to endorsements and testimonials);
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.18 </strong>engages in any unauthorized commercial activities, solicitations and/or sale;
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.19 </strong>that contains any computer viruses, worms or other potentially damaging computer programs or files; and/or
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.7.20 </strong>that otherwise violates these Terms of Use.
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.8 </strong>You understand and agree that we have the right, but not the obligation, to monitor User Content; alter, remove, or refuse to Post or allow to be Posted any User Content; disclose any User Content, and the circumstances surrounding its transmission, to any third party; investigate, take legal action against and delete any Account and/or User Content that, in our sole judgment, violates these Terms of Use, might be offensive or illegal, might harm, violate the rights of, or threaten the safety of others, or might in any way be deemed unsuitable by us.
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.9 </strong>You acknowledge that User Content and Third Party Content may be inaccurate, misleading, or deceptive. Posted Content should not be construed as an endorsement, affiliation, or promotion of any of the products or services discussed. The opinions expressed by third parties reflect solely the opinions of the individuals who submitted such opinions and may not reflect the opinions of Colgate. Colgate does not represent or warrant the accuracy of any statements or product claims made in User Content and/or Third Party Content, nor endorses any opinions expressed within any such Content. Colgate is not responsible for, and has no liability for, any use of all or any part of the User or Third Party content by any third party. None of the User or Third Party Content submitted shall be subject to any obligation of confidence on the part of Colgate, its agents, subsidiaries, affiliates, partners or third party service providers and their respective directors, officers and employees.
          </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 6.10 </strong>By submitting your email address in connection with any User Content, you agree that Colgate and its third party service providers may use your email address to contact you about the status of such User Content and other administrative purposes.
          </em>
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          7. Warranties And Limitations Of Liability for the Service
        </HeaderLabel>

        <Paragraph className='termsParagraph mt-[24px]'>
          <em><strong className='boldText'>7.1 </strong><u> Warranties. </u> We will use commercially reasonable efforts to cause the Service to operate in substantial conformance with its published documentation. To the fullest extent permitted by applicable law, Colgate’s sole obligation and your sole remedy with respect to any failure of the Service to substantially conform to the documentation is for Colgate to use commercially reasonable efforts to remedy any such failure as soon as is reasonably practicable, and if such failure is not remedied in a reasonable time, for you to terminate your use of the Service pursuant to Section 14.2.</em>
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>7.2 </strong><u>No Specific Results. </u> Colgate does not represent, warrant or otherwise guarantee: (a) the reliability and suitability of the Service; (b) the effectiveness, suitability or reliability of communicated information (including any data provided through the Service); (c) that the Service will work without interruption or that it will be free of errors, viruses or other harmful components; (d) outcomes resulting from your use of the Service; (e) that the information available on or through the Service is comprehensive or exhaustive, or that it addresses all relevant symptoms, medicines, and treatments for various oral diseases; or (f) any outcome with respect to health and well-being as a result of the application of this information.</em>
        </Paragraph>
        <p>&nbsp;</p>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 7.3 </strong><u> No Practice of Dentistry or Medicine.</u>YOU ACKNOWLEDGE AND AGREE THAT (i) OUR SERVICE IS INTENDED FOR GENERAL INFORMATIONAL PURPOSES ONLY, INCLUDING ANY INFORMATION WHICH MAY BE ACCESSIBLE SOLELY TO MEDICAL PROFESSIONALS; (ii) OUR SERVICE IS NOT INTENDED TO CONSTITUTE, AND DOES NOT CONSTITUTE, THE PRACTICE OR FURNISHING OF MEDICAL OR PROFESSIONAL HEALTH CARE ADVICE, DIAGNOSIS, CONSULTATION, TREATMENT, CONTENT, DATA, SOFTWARE, INFORMATION, PRODUCTS AND/OR SERVICES; AND (iii) YOU WILL ALWAYS CONSULT WITH A QUALIFIED DOCTOR OR OTHER HEALTH CARE PROFESSIONAL FOR MEDICAL OR HEALTH CARE ADVICE, DIAGNOSIS, CONSULTATION, TREATMENT, CONTENT, DATA, SOFTWARE, INFORMATION, PRODUCTS AND/OR SERVICES. YOU ALSO ACKNOWLEDGE AND AGREE THAT ANY MEDICAL OR HEALTH CARE PROVIDER OR OTHER DIRECTORIES OR LOCATORS (INCLUDING, WITHOUT LIMITATION, THEIR CONTENTS AND RESULTS) CONTAINED ON OR PROVIDED THROUGH OUR SERVICE ARE INTENDED FOR GENERAL CONSUMER INFORMATIONAL PURPOSES ONLY, AND DO NOT IMPLY OUR ENDORSEMENT OF, OR THAT WE HAVE ANY ASSOCIATION WHATSOEVER WITH, SUCH PROVIDERS.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 7.4 </strong><u>Warranty Disclaimer. </u>EXCEPT AS SET FORTH IN SECTION 7.1 AND TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, COLGATE DISCLAIMS ANY AND ALL WARRANTIES RELATING TO THE SERVICE OR ANY OTHER MATTER COVERED BY THESE TERMS OF USE, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. COLGATE DOES NOT WARRANT THAT THE SERVICE WILL OPERATE WITHOUT INTERRUPTION OR DELAY AND/OR BE ERROR-FREE, OR THAT ALL FAILURES OF THE SERVICE TO CONFORM TO THE DOCUMENTATION CAN OR WILL BE CORRECTED. COLGATE MAKES NO WARRANTIES OR REPRESENTATIONS AS TO THE ACCURACY, CURRENCY, OR COMPLETENESS OF ANY CONTENT PROCESSED BY OR INCLUDED WITH THE SERVICE.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 7.5 </strong><u>Limitations of Liability</u>EXCEPT AND SOLELY TO THE EXTENT PROHIBITED BY APPLICABLE LAW, IN NO EVENT SHALL COLGATE BE LIABLE FOR LOST PROFITS OR BUSINESS, LOSS OF GOODWILL, LOSS OF DATA, INTERRUPTION OF BUSINESS, OR FOR ANY EXEMPLARY, PUNITIVE, SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, REGARDLESS OF WHETHER SUCH DAMAGES ARISE UNDER ANY THEORY OF TORT (INCLUDING NEGLIGENCE), CONTRACT, STRICT LIABILITY OR OTHERWISE AND REGARDLESS OF WHETHER SUCH PARTY IS ADVISED OF THE POSSIBILITY OF ANY SUCH DAMAGES. </em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em> The aggregate liability of Colgate for any and all claims arising under or in connection with these Terms of Use or its subject matter shall not exceed $500. Certain laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. Solely to the extent that these laws apply to you, some or all of the above disclaimers, exclusions, or limitations may not apply to you, and you may have additional rights.
          </em>
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          8. Data Collection; Privacy Policy
        </HeaderLabel>
        <Paragraph className='termsParagraph '>
          Your use of the Service is subject to the Colgate-Palmolive Company Privacy Policy, which is incorporated herein by reference.Your use of the Service is subject to the Colgate-Palmolive Company Privacy Policy, which is incorporated herein by reference.          
        </Paragraph>
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          9. Essential Part of the Bargain
        </HeaderLabel>
        <Paragraph className='termsParagraph '>
          The parties acknowledge that the disclaimers and limitations set forth in Section 7 are an essential element of these Terms of Use between the parties and the parties would not have entered into these Terms of Use without such disclaimers and limitations.
        </Paragraph>
      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          10. Third Party Links


        </HeaderLabel>
        <Paragraph className='termsParagraph '>
          Colgate may provide links or references to other sites or services owned or controlled by third parties, but Colgate has no responsibility for the content of such other sites and shall not be liable for any damages or injury arising from your use of such content, sites or services. Any links to other sites are provided as merely a convenience to you. If you leave our Service and go to a third party site, you should confirm the terms, privacy and other policies that apply to you since we neither control, nor have any responsibility for such third party sites.          
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          11. Loyalty and Rewards Programs

        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          We may make available or automatically enroll you in certain rewards programs (“Programs”) when you use our Services. The earning, expiration and redemption and rules associated with such Rewards Programs are governed by the applicable rewards program terms, which are available on the relevant Site or App.
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          12. Contests, Sweepstakes and Promotions

        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          From time to time, we may conduct promotions on or through our Service, including, without limitation, contests and sweepstakes (each, a &quot;Promotion&quot;). Each Promotion may have Official Rules or other terms and limitations which will be posted or otherwise made available to you and, for purposes of that Promotion, will be deemed incorporated into and form a part of these Terms of Use. To the extent that the terms for any Promotion conflict with these Terms of Use, the terms for that Promotion shall control with respect to that Promotion only.
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          13. Indemnification; Unauthorized Use
        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>13.1 </strong><u>Indemnification.</u> To the fullest extent permitted by applicable law, you hereby agree to indemnify and hold harmless Colgate from any and all damages, costs and expenses (including, without limitation, reasonable attorneys’ fees) suffered or incurred by Colgate in connection with any claims that Colgate is required to pay to third parties to the extent such damages, settlement amounts, costs and expenses are attributable to your provision of User Content through the Service, including any actual or alleged infringement of third party intellectual property by such User Content.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>13.2 </strong><u>Notification of Unauthorized Use.</u> You shall promptly notify Colgate in writing upon your discovery of any unauthorized use or infringement of the Service, or the related documentation, or Colgate&apos;s intellectual property rights with respect thereto. Colgate shall have the sole and exclusive right to bring an infringement action or proceeding against any infringing third party and, in the event that Colgate brings such an action or proceeding, you shall cooperate and provide full information and assistance to Colgate and its counsel in connection with any such action or proceeding.</em>
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          14. Term and Termination

        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>14.1 </strong><u>Term.</u> Your access to the Service shall begin on the date you register for the Service or access the Service and shall continue until terminated under the provisions of this Section 14.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>14.2 </strong><u>Termination for Convenience.</u> Colgate may terminate your use of the Service at any time, except to the extent that Colgate’s right to terminate is prohibited by applicable law. You may terminate your agreement with us at any time by cancelling your Accounts for the Service, uninstalling any Apps and ceasing use of the Sites and the Service. In the event of termination, you will still be bound by your obligations under these Terms of Use.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>14.3 </strong><u>Effect of Termination.</u> Upon the expiration or sooner termination of these Terms of Use, all license rights granted to you under these Terms of Use shall automatically and immediately cease and you shall promptly cease all uses of the Service and shall uninstall the Apps. Notwithstanding the foregoing, all provisions of these Terms of Use which are by their nature intended to survive termination or expiration, including without limitation, Sections 6.3, 6.4, 7.1, 7.4, 7.5, 13, 14.3, 15, 16 and 18 shall survive the expiration or sooner termination of these Terms of Use.</em>
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          15. Governing Law; Dispute Resolution; Waiver of Jury Trial and Class Actions

        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 15.1 </strong><u>Governing Law.</u> These Terms of Use are governed by the laws of the State of New York, without regard to its choice of law provisions. The courts of general jurisdiction located within New York, New York, will have exclusive jurisdiction over any and all disputes arising out of, relating to or concerning these Terms of Use or in which these Terms of Use are a material fact</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 15.2 </strong><u>Dispute Resolution. </u>With respect to users in the U.S., any controversy or claim between the parties or arising out of these Terms of Use or any use of the Service shall be determined by one disinterested arbitrator in binding arbitration pursuant to the Commercial Arbitration Rules and the Supplementary Procedures for Online Arbitration of the American Arbitration Association (the “AAA”). The arbitrator shall be experienced in agreements for information technology services, either as an attorney or as an information technology professional. If the parties fail to appoint an arbitrator within forty-five (45) days of the institution of the arbitration, the AAA shall select the arbitrator promptly thereafter. Any requests for accelerated, emergency or preliminary relief shall be submitted pursuant to the AAA’s Optional Rules for Emergency Measures of Protection. If any such requests are made before an arbitration panel is empaneled, then the AAA shall appoint one disinterested arbitrator as an arbitration panel to immediately hear and decide such request. The arbitration panel shall have the right to grant interim awards. Testimony shall be permitted by telephone, video conference and other forms of real-time telecommunications. If the arbitrator requires in-person hearings, the hearings shall be held in New York, New York. The arbitral award will be final and binding, and may be entered and enforced in any court of competent jurisdiction.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'> 15.3 </strong><u> Waiver of Jury Trial and Class Actions. </u>BY USING THE SERVICE AND THEREBY AGREEING TO THESE TERMS OF USE, YOU AND COLGATE ACKNOWLEDGE AND AGREE TO WAIVE CERTAIN RIGHTS TO LITIGATE DISPUTES IN COURT, TO RECEIVE A JURY TRIAL OR TO PARTICIPATE AS A PLAINTIFF OR AS A CLASS MEMBER IN ANY CLAIM ON A CLASS OR CONSOLIDATED BASIS OR IN A REPRESENTATIVE CAPACITY. YOU AND COLGATE BOTH AGREE THAT ANY ARBITRATION WILL BE CONDUCTED ON AN INDIVIDUAL BASIS AND NOT A CONSOLIDATED, CLASS-WIDE OR REPRESENTATIVE BASIS AND THE ARBITRATOR SHALL HAVE NO AUTHORITY TO PROCEED WITH AN ARBITRATION ON A CLASS OR REPRESENTATIVE BASIS. THE ARBITRATOR MAY AWARD INJUNCTIVE RELIEF ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF WARRANTED BY THAT PARTY’S INDIVIDUAL CLAIM. IF FOR ANY REASON THE ARBITRATION CLAUSE SET FORTH IN THESE TERMS OF USE IS DEEMED INAPPLICABLE OR INVALID, OR TO THE EXTENT THE ARBITRATION CLAUSE ALLOWS FOR LITIGATION OF DISPUTES IN COURT, YOU AND COLGATE BOTH WAIVE, TO THE FULLEST EXTENT ALLOWED BY LAW, ANY RIGHT TO PURSUE OR TO PARTICIPATE AS A PLAINTIFF OR AS A CLASS MEMBER IN ANY CLAIM ON A CLASS OR CONSOLIDATED BASIS OR IN A REPRESENTATIVE CAPACITY.</em>
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          16. General
        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>16.1</strong><u> Export Compliance.</u> The Service is subject to United States export control and economic sanctions laws and regulations, and may be subject to export, import or sanctions regulations in other countries. You agree to strictly comply with all such laws and regulations, including any U.S. embargo or other federal rules and regulations restricting exports. You further acknowledge that you have the responsibility to obtain authorization to export, re-export, transfer or import the Service or data on our Service, as may be required under U.S. law or the laws of other jurisdictions. You may not export, re-export, transfer or import the Service, or any software, data, or information available through the Service, in violation of United States export control laws and regulations, including but not limited to the U.S. Export Administration Regulations administered by the U.S. Department of Commerce and all economic sanctions regulations and laws administered by the U.S. Department of Treasury Office of Foreign Assets Control. You shall indemnify and hold harmless Colgate from and against any and all losses, claims and expenses incurred by Colgate as a result of the breach of your obligations under this Section.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>16.2</strong><u> Independent Contractors.</u> In making and performing these Terms of Use, the parties are acting and shall act as independent contractors. Neither party is, nor will be deemed to be, an agent, legal representative, joint venturer or partner of the other party for any purpose.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>16.3</strong><u> Force Majeure.</u> In the event that Colgate is unable to perform its obligations under these Terms of Use because of acts of God, strikes, equipment or transmission failure, unavailability or poor performance of the Internet, or other causes reasonably beyond its control, Colgate shall not be liable to you for any damages resulting from such failure to perform or otherwise from such causes.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>16.4</strong><u> Public Statements.</u> Either party may disclose the existence of these Terms of Use but may not represent to any third party any positions, statements, intentions or other actions on behalf of the other.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>16.5</strong><u> Assignment.</u> You may not assign any of your rights or privileges, or delegate any of your duties or obligations hereunder to any third party without the prior written consent of Colgate. Any purported assignment in contravention of this Section shall be null and void. Subject to the foregoing, these Terms of Use shall be binding upon and inure to the benefit of the parties hereto and their respective permitted successors and assigns.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>16.6</strong><u> Notices.</u> Except as otherwise indicated herein, all notices and other communications hereunder shall be in writing and shall be deemed effective when delivered by hand, facsimile transmission, reputable overnight delivery service, or certified mail (return receipt requested), postage prepaid to: (a) in the case of Colgate, to the attention of the Chief Legal Officer, Colgate-Palmolive Company, 300 Park Ave, New York, NY 10022; and (b) in the case of user, to the address set forth in your Account information (if any) or by posting such notice on the Site or App or in these Terms of Use.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>16.7</strong><u> Entire Agreement; Amendment. </u> These Terms of Use constitute the entire agreement between the parties concerning the subject matter hereof and supersedes all prior understandings and agreements between the parties, whether written or oral, regarding the subject matter hereof. Except as otherwise set forth herein, these Terms of Use may not be amended, supplemented or otherwise modified by you except by an instrument in writing signed by both parties and attached hereto.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>16.8</strong><u> Waivers.</u> A waiver by either party of a breach or violation of any provision of these Terms of Use will not constitute or be construed as a waiver of any subsequent breach or violation of that provision or as a waiver of any breach or violation of any other provision of these Terms of Use.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText'>16.9</strong><u> Severability.</u>If any provision of the Terms of Use is held to be unenforceable, it shall be severed and the remaining provisions will remain enforceable. The severed provision will be replaced by an enforceable provision most nearly reflecting the intention of the parties.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText' >16.10</strong><u> Headings. </u>he section headings used herein are for convenience of reference only and do not form a part of these Terms of Use, and no construction or inference shall be derived therefrom.</em>
        </Paragraph>
        <Paragraph className='termsParagraph'>
          <em><strong className='boldText' > 16.11</strong><u> Jurisdiction. </u> The Services are controlled and operated by Colgate from the United States, and is not intended to subject Colgate to the laws or jurisdiction of any state, country or territory other than that of the United States. We do not represent or warrant that the Services or any part thereof is appropriate or available for use in any particular jurisdiction other than the United States.</em>
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl text-[1rem] font-semibold font-HeroNewRegular mb-6'>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          17. Note To New Jersey Consumers

        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          If you are a consumer residing in New Jersey, the following provisions of these Terms of Use do not apply to you (and do not limit any rights that you may have) to the extent they are unenforceable under New Jersey law: (a) any disclaimer of liability for any indirect, incidental, consequential, special, exemplary or punitive damages of any kind (for example, to the extent unenforceable under the New Jersey Punitive Damages Act, New Jersey Products Liability Act, New Jersey Uniform Commercial Code and New Jersey Consumer Fraud Act); (b) any limitation on liability for loss of profits or loss or use of data (for example, to the extent unenforceable under the New Jersey Identity Theft Protection Act and New Jersey Consumer Fraud Act); (c) application of the limitations of liability to the recovery of damages that arise under any contract, tort (including negligence), strict liability or any other theory (for example, to the extent such damages are recoverable by a consumer under New Jersey law, including the New Jersey Products Liability Act); (d) any requirement that you indemnify us (for example, to the extent the scope of such indemnity is prohibited under New Jersey law); and (e) any governing law provision (for example, to the extent that your rights as a consumer residing in New Jersey are required to be governed by New Jersey law).
        </Paragraph>

      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='lg:max-w-3xl font-normal text-[1rem] font-HeroNewRegular mb-6 '>
        <HeaderLabel className='!text-[36px] !leading-10 font-semibold !font-HeroNewUltraLight !mb-6 text-appBlackTheme !text-left'>
          18. Copyright Infringement Claims

        </HeaderLabel>
        <Paragraph className='termsParagraph'>
          If you believe in good faith that material available on or through the Service, Apps or Sites infringes your copyright, the Digital Millennium Copyright Act of 1998 (the “DMCA”) provides a mechanism for you (or your agent) to send to Colgate a written notice of such alleged infringement, requesting that Colgate remove such material or block access to it. If you believe in good faith that someone has wrongly filed a notice of copyright infringement against you, the DMCA provides a mechanism for you to send to Colgate a counter-notice. Notices and counter-notices must meet the DMCA’s then-current statutory requirements.
        </Paragraph>
        <Paragraph className='termsParagraph'>
          See <a href='https://www.copyright.gov' className='text-appTheme'>https://www.copyright.gov</a> for details. Notices and counter-notices must be sent in writing to Melanie Jennison, Chief Trademark Counsel, as follows: By mail to Melanie Jennison, Chief Trademark Counsel, Colgate-Palmolive Company, 300 Park Ave, New York, NY 10022; or by e-mail on <a className='text-appTheme' href='https://www.colgatepalmolive.com/en-us/contact-us'>https://www.colgatepalmolive.com/en-us/contact-us</a>; or by phone at 1-800-468-6502.          
        </Paragraph>


      </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>


    </div>

  );
};

export default TermsCondition;
