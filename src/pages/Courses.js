import { VStack } from '@chakra-ui/react';
import PageWrapper from '../components/PageWrapper';
import CourseInformation from '../components/shared/CourseInformation';
import { HndCourses, NdCourses } from '../utils/CourseData';
import BottomNavigation from "../components/shared/BottomNavigation"

const Courses = () => {
  return (
    <PageWrapper>
      <VStack spacing={20}>
        <CourseInformation
          heading="NATIONAL DIPLOMA COMPUTER SCIENCE"
          courseData={NdCourses}
        />
        <CourseInformation
          heading="HIGHER NATIONAL DIPLOMA COMPUTER SCIENCE"
          courseData={HndCourses}
        />
      </VStack>
      <BottomNavigation navigation={{prev:"/staff",next:"/synopis-Nd"}} />
    </PageWrapper>
  );
};

export default Courses;
