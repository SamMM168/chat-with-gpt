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
                        <a href="https://dwz.cn/sNjc3GAV" target="_blank" rel="noreferrer">
                            <FormattedMessage defaultMessage="购买API key" description="购买API Key" />
                        </a>
                    </p>
                    <p>
                        <FormattedMessage defaultMessage="Your API key is stored only on this device and never transmitted to anyone except OpenAI." />
                    </p>
                    <p>
                        <FormattedMessage defaultMessage="OpenAI API key usage is billed at a pay-as-you-go rate, separate from your ChatGPT subscription." />
                    </p>
                </>,
            }),
        },
    ],
}
