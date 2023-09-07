import { FormattedMessage } from "react-intl";
import { OptionGroup } from "../core/options/option-group";

export const openAIOptions: OptionGroup = {
    id: 'openai',
    options: [
        {
            id: 'apiKey',
            defaultValue: "",
            displayOnSettingsScreen: "user",
            displayAsSeparateSection: true,
            renderProps: () => ({
                type: "password",
                label: "Your API Key",
                placeholder: "sk-************************************************",
                description: <>
                    <p>
                        <a href="https://dwz.cn/sNjc3GAV" target="_blank" rel="noreferrer" >
                            <span style="color: red;"><FormattedMessage defaultMessage="购买API key" description="购买API Key" /></span>>
                        </a>
                    </p>
                    <p>
                        <FormattedMessage defaultMessage="全网最低价格GPT-4，1美元额度只需0.5元人民币" />
                    </p>
                    <p>
                        <FormattedMessage defaultMessage="购买获得的卡密为本网站API Key，只能用在本网站。你的API Key只存在你本地设备，绝不会传输给任何人。
" />
                    </p>
                </>,
            }),
        },
    ],
}
