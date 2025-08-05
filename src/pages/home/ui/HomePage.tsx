import { AiMessage } from "@/entities/ai";
import { CourseCard } from "@/entities/course";
import { UserAvatar, UserStat } from "@/entities/user";
import { CONFIG } from "@/shared/config";

export function HomePage() {
    return (<div>

        <h1>Home</h1>
        <UserAvatar/>
        <UserStat/>
        <AiMessage/>
        <CourseCard/>
        <p>{ CONFIG.API_URL }</p>
    </div>);
}