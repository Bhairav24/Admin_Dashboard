import { Typography } from "antd"

function AppFooter(){
    return <div className="AppFooter">

<Typography.Link href="tel:+123456789">
+123456789
</Typography.Link>

<Typography.Link href="www.google.com" target="_blank">Privacy Policy</Typography.Link>

<Typography.Link href="www.google.com" target="_blank">Terms and Condition</Typography.Link>

    </div>
}

export default AppFooter