export interface Recipient {
    slug: string
    name: string
    type: 1 | 2 // Bali, BDC
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
        type: 1,
    },

    {
        name: 'Bhante Viryanadi',
        slug: 'bhante-viryanadi',
        type: 2,
    },
    {
        name: 'Bhante Vijjananda',
        slug: 'bhante-vijjananda',
        type: 2,
    },
    {
        name: 'Bhante Dharmamaitri',
        slug: 'bhante-dharmamaitri',
        type: 2,
    },
    {
        name: 'Bhante Nyanasila',
        slug: 'bhante-nyanasila',
        type: 2,
    },
    {
        name: 'Bhante Vangisa',
        slug: 'bhante-vangisa',
        type: 2,
    },
    {
        name: 'Bhante Loka',
        slug: 'bhante-loka',
        type: 2,
    },
    {
        name: 'Samanera Kris',
        slug: 'samanera-kris',
        type: 2,
    },
]

export function getRecipient(slug: string): Recipient | undefined {
    return recipients.find(r => r.slug === slug)
}

export const recipientInjectionKey = Symbol('recipient') as InjectionKey<Recipient | undefined>
