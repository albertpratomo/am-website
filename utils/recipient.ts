export interface Recipient {
    slug: string
    name: string
    type: 1 | 2 // bali, bdc
}

const recipients: Recipient[] = [
    {
        slug: 'steven',
        name: 'Steven',
        type: 1,
    },
    {
        slug: 'carlson-cicil',
        name: 'Carlson and Cicil',
        type: 2,
    },
]

export function getRecipient(slug: string): Recipient | undefined {
    return recipients.find(r => r.slug === slug)
}

export const recipientInjectionKey = Symbol('recipient') as InjectionKey<Recipient | undefined>
