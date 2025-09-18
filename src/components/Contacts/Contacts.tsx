import Watsup from '@/assets/icons/watsup.svg'
import Tg from '@/assets/icons/tg.svg'
import cls from './Contacts.module.css'
import classNames from 'classnames'

interface ContactsProps {
    className?: string;
}


export const Contacts = ({className}: ContactsProps)=>{

    return <div className={classNames(cls.Contacts, className)}>
        <a className={cls.phone} href="tel:89510571810" type="tel">+7 (951) 057 18-10</a>
        <a className={cls.social} href=""><Watsup /></a>
        <a className={cls.social} href=""><Tg /></a>
    </div>
}