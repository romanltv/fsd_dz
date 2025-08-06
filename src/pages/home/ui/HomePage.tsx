import { CONFIG } from "@/shared/config";
import { AiChat } from "@/widgets/ai/aiChat";
import { CourseCatalog } from "@/widgets/course/courseCatalog";
import { UserInfo } from "@/widgets/user/userInfo";

export function HomePage() {
    return (<div>

        <h1>Home</h1>
        <UserInfo/>
        <AiChat/>
        <CourseCatalog/>
            
        <p>{ CONFIG.API_URL }</p>
    </div>);
}