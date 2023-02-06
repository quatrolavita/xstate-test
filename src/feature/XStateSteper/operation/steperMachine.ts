import { createMachine, assign } from 'xstate'

interface SteperContext {
    allowedToIncrement: boolean
    index: number
    maxIndex: number
    minIndex: number
}

type Events = { type: 'NEXT_STEP' } | { type: 'PREV_STEP' }

export const steperMachine = createMachine<SteperContext, Events>(
    {
        id: 'steper',
        initial: 'start',
        context: {
            index: 0,
            maxIndex: 4,
            minIndex: 0,
            allowedToIncrement: false,
        },
        states: {
            start: {
                entry: assign({ allowedToIncrement: true }),
                on: {
                    NEXT_STEP: [
                        {
                            target: 'end',
                            cond: 'checkNextStepValid',
                            actions: 'nextStep',
                        },
                        {
                            target: 'inProgres',
                            actions: 'nextStep',
                        },
                    ],
                },
            },
            inProgres: {
                on: {
                    PREV_STEP: {
                        target: 'inProgres',
                        cond: 'checkNextStepValid',
                        actions: 'prevStep',
                    },
                    NEXT_STEP: [
                        {
                            target: 'end',
                            cond: 'checkNextStepValid',
                        },
                        {
                            target: 'inProgres',
                            actions: 'nextStep',
                        },
                    ],
                },
            },
            end: {
                type: 'final',
                entry: assign({ allowedToIncrement: false }),
            },
        },
    },
    {
        guards: {
            checkNextStepValid: (context, event) => {
                if (context.allowedToIncrement) {
                    if (event.type === 'PREV_STEP') {
                        return context.index !== context.minIndex
                    }
                    return context.index === context.maxIndex
                }
                return false
            },
        },
        actions: {
            nextStep: assign({ index: (context) => context.index + 1 }),
            prevStep: assign({ index: (context) => context.index - 1 }),
        },
    }
)

export const coinTurnStile = createMachine(
    {
        id: 'coinTurnStile',
        initial: 'Locked',
        context: {
            isCoinTurnStileLoked: true,
        },
        states: {
            locked: {
                on: {
                    COIN: {
                        target: 'unLocked',
                        actions: 'unLockTurnStile',
                    },
                    PUSH: {
                        target: 'locked',
                    },
                },
            },
            unLocked: {
                on: {
                    COIN: {
                        target: 'unLocked',
                    },
                    PUSH: {
                        target: 'locked',
                        actions: 'lockTurnStile',
                    },
                },
            },
        },
    },
    {
        guards: {},
        actions: {
            lockTurnStile: assign({ isCoinTurnStileLoked: true }),
            unLockTurnStile: assign({ isCoinTurnStileLoked: false }),
        },
    }
)
