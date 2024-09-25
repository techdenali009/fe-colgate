import { TestTemplatePage } from '@ui/templates/TestPageTemplate';

export default function TestPage() {
  return <TestTemplatePage submitLabel={''} onSubmit={function (): void {
    throw new Error('Function not implemented.');
  }} />
}