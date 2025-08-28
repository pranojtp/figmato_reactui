import HeaderCard from "../components/HeaderCard"
import TermsCard from "../components/TermsCard"
import FileUpload from "../components/FileUpload"

const FilesPage = () => {
    return (
        <div className="flex h-screen w-screen bg-neutral-900 text-white">
            <main className="flex-1 p-6 overflow-y-auto space-y-6">
                <HeaderCard />
                <TermsCard />
                <FileUpload />
            </main>
        </div>
    )
}

export default FilesPage
