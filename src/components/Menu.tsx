import { leftMenuItem } from "../constants/data"


const Menu = () => {
    return (
        <>
            {leftMenuItem.map(({ icon: Icon, title, id }) => (
                <div key={id} className="flex items-center gap-x-4 py-3">
                    <Icon />
                    <span className="text-sm text-gray-800">
                        {title}
                    </span>
                </div>
            ))}
        </>
    )
}

export default Menu