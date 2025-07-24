import { CONFIG } from "../../../shared/config";

export function HomePage() {
    return (<div>

        <h1>Home</h1>
        <p>{ CONFIG.API_URL }</p>
    </div>);
}