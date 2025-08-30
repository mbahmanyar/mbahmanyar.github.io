export const useVisitor = () => {


    const cookie = useCookie('first-load', { default: () => true })

    const isFirstVisit = useState('isFirstVisit', () => cookie.value)

    const markVisited = () => {
        cookie.value = false
        isFirstVisit.value = false
    }


    return {
        isFirstVisit,
        markVisited
    }
}
