import { Searchbar } from "../../organisms/Searchbar"

export const LandingTemplatePage = () => {
    const searchUsers = (value: string) => {
        console.log('searchUsers', value)
    }
    return <>
        <Searchbar submitLabel="search" onSubmit={searchUsers}></Searchbar>
    </>
}