import { createMachine } from "xstate";

export const anotherMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QFs6wIYwMpgI4FcwA7AYzADoSAnMdAFzABUALG9CAYggHsiKBLIgDduAawqpYGbHkKkK1WgxZsICQSJL1+vANoAGALoHDiUAAdusfnR1EzIAB6IAtAEYAbABZybtwHYAJj8ATgAOAFZAwP83ABoQAE9EPwj9cjCwwLCQwJD9fSCI-wBfEoTJaTAcAmIySjZlVlpOMCoqbipycwAbegAzTuRySsxq2TqFRqZm9nVhbi1bPSMTB0trZfskJ0Q8-3IvNy99CIiwrwBmDwjLi4TkhGPL9POPfUCvDxjj-1LykCjGS1eTkOizCAAYWmnB4fHIGjEEjQYxqcnq4NU0KUkHmmm0K2MRnWVhsdgczgQJwOgWKYVOF2ut3uSUQITO5H8HkubgivMuIXC+hCZQqKOB6IomJa2PokA4bQ6XV6AyGI3F4xBGIhsoYakRSzsJjWOw2ZN4FNcx3IxX0PJCvO5X15IQeKS8-h8fiC+hObhexX+YqkqImoNgxAgAAUOshzHQuLwBAtxOqQxLJuQI0Ro7H43jFgSiMbiabSVtLQgIt9fPpef5Il5AvpMpc3U8CpdyIFubywgL-C8e6LARq0Zns7nuHGE4rOt0+nRBlRhkDNZKs5GY9P8waiyXTGXNuSdpT2YFyB4AsFAgL8lf4qynl4PeQCg2QpcYiF-O+R2vx3DLc8wTAA5ABRAB1AB9ABZcCsCwABBABxcCTQscsT1AM8okva83FvQV9AfdsQhrMIPHCDxfzcft6RFAEALDepJ23GcOAgmD4MQ1D0LcQ9MOPC1TzZPCryCQi7xIvx2wiH83wFY52Q9Lw0jCf8xxYihzBAnAiDAqC4IQ5C0IwkAzQrUSqUKbs6QZK4bjuLx2z8PIbSCQVqMoqig1HdN10zXSdzofTDO4ky+N0ASSWE7YcMQak7IbBymWc9seQ8Q59n9Lx+3CQc-OYrUdL04gEwAVSjAARJDGHA6rjN4szSyE814t2Kt-AiG1sm8as-h7a5XPedJGUiGJ3myL5NICwD6mCmcwo4KravqxqeNM-jBIsrCRISmyaXs85HOZFynyuEIMmuD4wl+dkbi8WaqnmihYDodAqD1Faarqhqmq28zLOwzr-QUnISKvK8vz8Nsnz8FtyB-Z4qMuL5nWe0MSqzD6vvlVa-o2yKzJio92srMGDghjwof9YJ-XbbqfE+aJfxCL52aiTGM3DXHvq4gGota3a4opgcMnvWmYYZp8wj+S88r5S5PXky47m5wLQUEbcoBoKROKMzahZ24H9tB9mrqyX0HU9PLf38VzaSuvwPTcO1oguC4NdehEiB1vXYANiLmu22LyestwLYyZsvBtl85cKVy7R8SJPEuPk1KbLJve033-bQH61v+o2WpNvaOspAIeSRrlfx5WO6y-VyAh8SSvi5F41K5pitOxgB3dAySIKAADFOkhHcejALYOBL8DoOq8CABlwPWoHy8rT4axowV-Q+KIjkdzIbUKHIvh5HJPhz-vB9sYex6oCe4ynme54X5fV4a6Ky9F6yt4vHeDohwH0fI8UIF5TgemrBEF8uQr49zmrnWA3B+h0AAEpgAAFZgBIHQAAUtwAARhwNB4E8HgUhIwaCeCADyAAhdev8Dr1yyveZWsdIhvHbNyMIvhyIXCuCRP4ARr4bmQagjB2DcEEOIYw8OB1sgciVmkFsZxvjpzkkcTkVxPTdQ7lEDwojMxzioImeEiJUzFQ3CYgshpCRyKssw20l5-CClpLccIkRXJRF4V+O6zl2YeDuhpBBL1c4mIVO0ecKolxqiscYqJVBbH7lWMLU2FdEDp0jocIJni7SeIiM3V8MQ0ZpEFF8YJZQAREG4BAOADh4nyDDo4zqLgby+AIpHCaPx2weyRjlSO5w3YCKMaCRQcoVAtGaSDSk7gfC2ntI6NGV55LeN-B0n0foAx-FGdqLEMJplm0pE2MiiMeH+nrGpQiT1QlYzEcBEKhyMkIE9FlNGytuoZygXDR45ELwXG8J6a4Vzu7BjCdjRa8YwpPM3oRXwJxvj5DusKdOhT4Y9gvGkD8fzYgeiKr3MRfNIAwojtkdIP4biuMIuEI4Hhm7RGjnkcIUk3bsl2cmfOUgSUHQCN1N8hQhQ8heJDR2XJfAq18hcT8ER2XkAHkPUe49J7TxBukzenxeFHCbMKC2MCfkpGyJih0MQjh5BuPAsFdzMz9EEPwWAzBiVkxaZSQ1WV3hV1-Lcc4rp0V8mSvkIccsJqyvEegrBOD8FEO5Z1aamLurSsbCaulT4eGXn4S+F4NFYj4sQdjEx0bKRqztNlNxZwBSZDRWAk4PU9FZHkoEypVSgA */
  createMachine(
    {
      id: "messageSequence",
      initial: "createThread",
      tsTypes: {} as import("./anotherMachine.typegen").Typegen0,
      states: {
        createThread: {
        }
    }
});