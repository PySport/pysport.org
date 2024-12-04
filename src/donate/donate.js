export const Donate = ({inverted = false}) => {
    if (!inverted) {
        return <stripe-buy-button
            buy-button-id="buy_btn_1QSFOTDvN8hjioyIAEFh966F"
            publishable-key="pk_live_51QSEWbDvN8hjioyIc2LUM4EsoRjBXMPKM2MQMvDmqODjsfm3H3dJNsKUeaUEgJmZ73oOrYE5gXiriNBeUDlLeWqC00uB6HgcqO"
        >
        </stripe-buy-button>
    }
    //// white button
    return <stripe-buy-button
        buy-button-id="buy_btn_1QSEsxDvN8hjioyImeRj522w"
        publishable-key="pk_live_51QSEWbDvN8hjioyIc2LUM4EsoRjBXMPKM2MQMvDmqODjsfm3H3dJNsKUeaUEgJmZ73oOrYE5gXiriNBeUDlLeWqC00uB6HgcqO"
    >
    </stripe-buy-button>
}