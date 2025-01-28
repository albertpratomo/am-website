export interface Recipient {
    slug: string
    name: string
}

const recipients: Recipient[] = [
    {
        slug: 'steven',
        name: 'Steven',
    },
    {
        slug: 'carlson-cicil',
        name: 'Carlson and Cicil',
    },
]

export function getRecipient(slug: string): Recipient | undefined {
    return recipients.find(r => r.slug === slug)
}

export const recipientInjectionKey = Symbol('recipient') as InjectionKey<Recipient | undefined>
