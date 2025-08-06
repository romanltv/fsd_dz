import { CourseCard } from "@/entities/course";
import { CoursesFilter } from "@/features/courses/coursesFilter";

export function CourseCatalog() {
    return <div>
        <CoursesFilter />
        <CourseCard />
    </div>
}