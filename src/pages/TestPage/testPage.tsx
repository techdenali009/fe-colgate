import { TestTemplatePage } from "@ui/templates/TestPageTemplate";

export default function TestPage() {
    return <TestTemplatePage submitLabel={""} onSubmit={function (value: string): void {
        throw new Error("Function not implemented.");
    } }></TestTemplatePage>
}