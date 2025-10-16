import { useState } from 'react';
import { Button } from './ui/button';


interface TabBarProps {
    tabItems: { title: string; key: string }[];
}
const TabBar = (props: TabBarProps) => {
    const { tabItems } = props;

    const [selectedKey, setSelectedKey] = useState<string | undefined>(tabItems[0]?.key ?? undefined);

    return (
        <>
            {tabItems.map(({ key, title }) => (
                <Button onClick={() => setSelectedKey(key)} key={key} className={`text-xs sm:text-sm rounded-none cursor-pointer border-b border-b-gray-300 font-normal ${selectedKey === key ? "border-b-black font-semibold" : ""}`} variant="ghost">
                    {title}
                </Button>
            ))}
        </>
    )
}

export default TabBar