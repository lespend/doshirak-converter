import { FC } from 'react'
import s from './CorrespondenceTable.module.css'
import classNames from 'classnames'

interface CorrespondenceTableProps {
    className: string;
    correspondence: {
        from: string;
        to: string;
        values: number[][];
    }
}

const CorrespondenceTable: FC<CorrespondenceTableProps> = ({ correspondence, className }) => {
    return (
        <table className={classNames(s.table, className)}>
            <thead>
                <tr className={classNames(s.tableHead, s.tableRow)}>
                    <th className={s.tableHeadCell}>{correspondence.from}</th>
                    <th className={s.tableHeadCell}>{correspondence.to}</th>
                </tr>
            </thead>
            <tbody>
                {correspondence.values.map(pair => (
                <tr className={s.tableRow}>
                    <td className={classNames(s.tableCell, s.tableCellLeft)}>{pair[0]}</td>
                    <td className={classNames(s.tableCell, s.tableCellRight)}>{pair[1]}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CorrespondenceTable;