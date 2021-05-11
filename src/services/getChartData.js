import { getAppsData } from '../helpers/fetchData'
import { colorGenerator } from './colorGenerator'

export const getPieChartData = async () => {
    const organizations = await getAppsData()
    const appsObj = organizations.data.organizations.reduce((finalApps, { apps }) => {
        return apps.reduce((appsCount, { repoName }) => {
            if(!appsCount[repoName]) {
                appsCount[repoName] = { count: 0 }
            }
            appsCount[repoName].count++
            return appsCount 
        }, finalApps)
    }, {})
    
    const chartData = Object.entries(appsObj).map(
        ([key, { count }]) => ({
            id: key,
            label: key,
            value: count,
            color: colorGenerator(key)
        })
    )
    return chartData
        .sort((a, b) => b.value - a.value)
        .slice(0, 8);
}