import React, { FC } from 'react'
import Card, {ICardProps} from './components/Card'
import throttle from 'lodash/throttle';


const item: ICardProps[] = Array(28)
.fill(0)
.map(() =>({
    title:'VEDBO ВЕДБУ Кресло c высокой спинкой',
    rating: Number((Math.random() * 5 + 1).toFixed(2)),
    price:{
        new: Math.round(Math.random() * 100000),
        old: Math.round(Math.random() * 100000),
        hot: !!Math.round(Math.random() * 1),
    },
    color: 'Темно-серый',
    material: 'Каркас: Сталь, Подушка сиденья: Высокоэластичный пенополиуретан',
    size: 'Ш: 80 см Гл: 85 см В: 108 см',
    vendorcode:'304.241.30',
    seller: 'IKEA'
}))


const App: FC  = () => {
    const [maxVal, setMaxVal] = React.useState<number>(2)

    const wrapRef = React.useRef<HTMLDivElement>(null)

    const onScroll = React.useCallback(
        throttle((e: any) => {
            if(e.target) {
                const isEnd = e.target.scrollWidth - e.target.scrollLeft - 250 <= e.target.clientWidth;
                if(isEnd){
                    setMaxVal(val => val + 1)
                }
             }
        }, 100),
        [],
    )

    React.useEffect(() => {
        if(wrapRef.current && maxVal >= item.length){
            wrapRef.current.removeEventListener('scroll', onScroll);
        }
    },[maxVal, onScroll])

    React.useEffect(() => {
        const {current} = wrapRef;
        current?.addEventListener('scroll', onScroll);
        return () => {
            current?.removeEventListener('scroll', onScroll)
        } 
    },[onScroll])


    return (
        <div ref={wrapRef} className='wrapper'>
            <ul className='columns columns--first'>
                <li></li>
                <li>Рейтинг</li>
                <li>Цена</li>
                <li>Цвет</li>
                <li>Материал</li>
                <li>Механизм</li>
                <li>Артикул</li>
                <li>Продавец</li>
            </ul>
            {item.slice(0, maxVal).map((obj: ICardProps, index: number) =>(
                <Card key={index} {...obj} />
            ))}
        </div>
    )
}

export default App
