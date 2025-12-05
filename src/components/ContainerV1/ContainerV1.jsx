import * as Styles from "./ContainerV1.styles.jsx"

export default function ContainerV1({ radius, defaultKey, children}) {
    return(
        <Styles.Container defaultActiveKey={defaultKey} className="p-4" $rad={radius}>
            {children}
        </Styles.Container>
    )
}