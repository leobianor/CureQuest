export default function cardAtalho({ atalho }) {
    return (
    <div id="atalhos" className="flex justify-center items-center shadow-[4px_4px_15px_0px_rgba(122,0,234,0.50)] px-[20px] py-[40px] rounded-[20px] ">
        <div className="w-full self-center flex flex-row gap-2 flex-wrap">
            <a
            href="..."
            className="flex items-center text-black not-italic font-bold text-xl self-center text-center mt-px gap-2"
            >
            { atalho }
            </a>
        </div>
    </div>

    )

}