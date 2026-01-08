import { useRouter } from "next/router"

export default function Button({ name, page }) {
    const router = useRouter()
    return (
        <>
            <button
                className="w-45 h-16 text-xl rounded-xl bg-transparent border-2 accent-white font-[Silkscreen]"
                onClick={() => router.push(page)}
            >
                {name}
            </button>
        </>
    )
}