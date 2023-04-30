import styles from './styles.module.css'
import { useGetStatisticsQuery } from '../../redux/features/employees/employeesAPI'
export function useHook() {
	const myClass = styles.component
	const { data, loading, error } = useGetStatisticsQuery()
	return { myClass, employees: data?.result, loading, error }
}
