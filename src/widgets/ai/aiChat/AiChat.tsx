import { AiMessage } from "@/entities/ai";
import { AiSendMessage } from "@/features/ai/aiSendMessage";

export function AiChat(){
    return <div>
        <AiMessage/>
        <AiSendMessage/>
    </div>
}