import { AiMessage } from "@/entities/ai";
import { CourseCard } from "@/entities/course";
import { UserAvatar, UserStat } from "@/entities/user";
import { AiSendMessage } from "@/features/ai/aiSendMessage";
import { CoursesFilter } from "@/features/courses/coursesFilter";
import { CONFIG } from "@/shared/config";

export function HomePage() {
    return (<div>

        <h1>Home</h1>
        <UserAvatar/>
        <UserStat/>

        <AiMessage/>
        <AiSendMessage/>

        
        <CoursesFilter/>
        <CourseCard/>
        <p>{ CONFIG.API_URL }</p>
    </div>);
}