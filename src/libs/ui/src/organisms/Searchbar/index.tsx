import { Button } from "@ui/atoms/Ex-Button";
import { InputField } from "@ui/molecules/Ex-FormField";
interface ISearchbar {
    submitLabel: string,
    onSubmit: (value: string) => void,
}

export const Searchbar: React.FC<ISearchbar> = ({ submitLabel, onSubmit }) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(e.target[0].value)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <InputField placeholder="Search users" type="text" className="border-2 rounded py-2 px-4 rounded mr-1"></InputField>
                <Button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{submitLabel}</Button>
            </div>
        </form>
    </>
};