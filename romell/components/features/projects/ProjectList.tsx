import Image from "next/image";

const PROJECTS = [
  {
    title: "AD Project 1 — Dota 2 Marketplace",
    description: "A Dota 2 marketplace demo with product cards and new item grid.",
    href: "https://github.com/XxomelxX/AD-Project1",
    imageSrc: "https://hawk.live/storage/post-images/dota2-market-sell-3261.PNG",
  },
  {
    title: "My Profile — Act 1",
    description: "A profile page sample for BSIT student details, skills, and social links.",
    href: "https://github.com/XxomelxX/apps-dev-act1/tree/main/Act%201",
    imageSrc: "data:image/webp;base64,UklGRjIUAABXRUJQVlA4ICYUAABwWQCdASrgAOoAPp1EnUslo6ynqFIbOZATiWJt8x/caM7Po5sOMBuv07/U/bp8Ad0f0XHdVj6F/PHlL9XXmB89X90PUH+2/q6/6z9r/en/dP9b+GfyFfzLqVfQl8u79w/h2/eH0yrzE/feVPXcQQ8/vabtoeBzu382ejBM7VRaAH8y/wnrGf5fkM+vvYR8tX2KfuP7IX69NEi63RDsneoJWa4kJIogPrsUO3nVsd/t50mhlm74XHqgXjk032b4bThrvKoSXnAj5Wp2BwMcX3GUM5vrbxRai7R93DF4tL65GtUXvFYXbdvtvbZrnbQ3/QUblFyzUspx8BkEhhOeTMW0icl/vCaI0tzH9+VdgB0gg2QO7Cj4KVBWwm0FhcdC0Xdu94Qo2Q176duuNZAvd33JisJ4lH00eEgaz1dKRtt0lpNicuL1Pp8qJgrJY2RgR7arq0SogTnOw1/Qo/BBCjVXFvNlHhXN5c/vdt1RY2SW15ZV4NILbCcNFMXJ1tInddWmNcUCUryBym2apuxhLod6ELxJb8a3N14qffHToMOpdM1vHBJtgHy9FycYEjHR5/5ceKe3Z9BTbm9ZrRv3QTOoWWtZKfEX45SePtsy3aFeMQ/9WkDGsqoB4KsMg4HdDsyEpmZXV4paE2ZN6tD7Soh/xtb+X0jIZo4L32TASMP0Pm1rH31IruGmV4oVPEM7pY/au4GSRPZPCjbkXVZrECnH81uDYpK2UPsPYnjnalsffGxEuyp4axDxcXfszNFs29bCpN2RZ7CHxV5U6+fpE11EgP0xsFJGaUAvNNqa20iaw7rkVi9TscnlIk82tLHAFbizQSpJVeOJ1OHaodkQtr7QyUmoEhVATfFFjngDFl1+bP4GHcYppoKCqvIga2H5CKmcCfjAJydbqpWVHjj28/xIjSu8un+bTpAr7QvFkxSNfyn3Hub8vKpD5UXH5XaYu+JgGQ3gAP7yp8YAARkQ7otOTc0Mn3bY6spu7J2KFgfEGiKHmQChdjiS7l3Yz9ads64inFkGqf374+5S+s65ZOWwHvWK2315H0SAyUROrwSNL5wlnubojikUW8b6Et2owj0sjEZ0kBWVllP8w7XlJefsANQMTe/4ShjAN9oNKcGvp9/pbVwHrcEcnDoDSi9w6ZkO90H+axFG/iHt1bYzAleS4ngxZd5kNvHESlWQLpQe+pT05n+6Fnh9CzXYbGBc+TDlAdPgzDTxPzLbNF4zJAhLPZ8/wW/U6oV0OQTpkWEKBBDYnKkck/ecxyhHChY8VzSiPkh9Hw6xjhg0Qm4isYrMwZwa24G36vOOl/LZovI7nGLptN5pRiOMFkGZ+BiIkpuorofJNHQ271jVI1H55YUzb+18to8no9TzXwQSWkxzcN5j5a6I/cc3KnmF2uzI1BE/cKmBF/+EP2z0/MCLBuOkynZwlmjmqmK+Oa2o7AC4kteG4LGEB4fhhoBscSCAvkqfk0KYsSXltoz69NK2io30Q2y4X447o91wAiPdFt4qXzrEnLFnd2OuBjYfYWSwZAX2R9Gcs6MXIoNLOHD4oGeJ7WYRB4fUCyyNbNI8a/hugBmOMW63iaXs8F4qNMZnHLKkFYm9kbG2BjGYMSeS7xLpSQm+JEM59XY5gSamrr3qpDG9bdnn78PCFN/TU3yJ64Sh5MwlizQQjTZvAIxwykdxCFAfU1s36tdbHhKziDqNWPcaZ03Y3Sc3IJ5gfzN96uEcDksPKBX8I4HofJ5RA0j94e/u48fYrQJ+X5nUfp1Ft5NyTeI+P+y03gZhFvditV++i98wLTvzdkYO+2NltwJaYxHIwyOaiC20/clJIi7P3F3jpKAEOpHY2dIfoSHzy/5g6taUz2dOAQzGxDLLIBEGgcAErTryCiTUoIEMLQ5zAXqTsTGuR7wBoesfun7z9kS40VCY6monxZwsnMLRziO/b/KUh3CwfLwHl0/CelgusTIWCUWb6e241mSSw7f4NcdBt4VNDQ8fkSxmHMERieh5AvnKBhbup27ndnqr8VSIO2DlDkXFlW4GRHWdoyfv9EjAqwzmiwq5mv6rXBFxHiLSOz2agjZGspIaja+d3jBdZ52/+5C7O678/1XMDJ6M5i7ASwA6nANRwW91/ytMn3vLStTWqmg0gr0Ofrjhjfm2lvWCVXqe2gaCGuOxJwlYzEyemLXWa6ME8aPiMIjVhmcuqyyz1fRMYmyyQDDTu6ktTEeV3xAR9olzsxS1xeIq/DTuvi1Hz6gYtIsHCYax0In/abYiS0lFojDrc0fM9cCz4L4eLfLZbdZ76FYtwyiCDk9A0VIoHf1p5zXAd61ybdXf9zvGg3V9UnD3YjCXtKxF+5D68u08nNZrJmI9n5/mRAA8M9VhK+j+7WLzY+1jUXl0Z18cOuUMqyyrTj9V0N1W08qwF++o9v0oAgL8ch81Aj9KPYGI/LrzYI8jqR/CIsBtImdtx4eZLv0tTmbqqoQtKv5Wp+BMANZpNp375p635plwBqjmTkfhJBi9/Bhnye4kvl8WfSsG7oXjU8fKJMRj9HPhMW9kE5nNMiHTavkkD8j/GHX6dOF1osVfbRlaEGDMVGSnpuhlK0S1jmJs+E3+J3vpLc6R2ZYEBGviAQ4OolZedFADoVRzr835jxYBUH/zzQlKejpC2Od5EcOV/Si7APUhMTr9xVGa8CA7PoR+azzA+NpGUyzlrnyGifjT/iff/gsz/5qYoBW2q4y8pUcr5aOSioDpTR77W1ZzDSbOgCMqUTp/v0d91X7SDcV5B0Hs0geGypZ7KS6drSXGMwnGjkgnUUYQGsSJs94iDB+0lkBlzYOYlYsknd/3Jpu2L5P6MhdDRtdkC4K83skDd35ZDNyIl2oazZ+TcLOB6BrcTQI/3iP156/vihrQq00T5jDHTJkRMDFZ7E86fQalzlPtN58Xs06LD8hTXQuByHsAKRfHdkbwmo/ggrfYwPX8gkaW0WGrZttos3vJl1gKwx+2BtEjE2h8vSFqiA+KCER3c55OtH/PJWr7MGQQNTtgLFr3SpbdhbuVKpSpLunWJQaCaix/Pf6ylJ2t7sGiarFtfVd2X4uVYCl5pIKqJxyP9iUWKkR2TZJZmmHGyL0uPSiIRuxVeJdnofQsWAEyWRAvDuD4ZP3m+cKHVStMtAwLO8pd8Yi4c2H2ChE3GXd3fWJ3K2PoBchNswXJ+OIwZlgzsHM7Fc8Xt3UnU+c5qq/2wbCIcpziUwyB0f9QGljXfHqFizKFjoCFkL/rkfItsDQiPkiuAQ6Hg2yGxHaJ2MhJ9e8gC+IHzLWZIEZWvKRLnUiIVjcPZQmnZrVNs6KGsWVLnrtxXtWYxtl0C9KkQWRTAGNQ1SIPi1XloZc4VmVjxxhgcZWKK1BCBUrsifDEJwatrXO9PDAllqNJG0Jlz0iZ9TY2bzfajsS2rGwa+mWYMHg2i2Pv/d3ylJlgGu8mLnXMQipyIdi2AUN4BdyfG3A2wekjCzEz3p2uT6Ih0W9Sa74kvbmdnaVLqhTiroiUPFamBEfVZ+8xgPhrFAFvDmaQ3A7jxpQT4IsTIr3ki2ghNQw3ZGijpgb9n3DRe7cOtrclicWOgbdbKkuU3IahaNUK16uDs7s5RozoDfFghytLjEQab9DnnKP+N2mT28rWFY11SWfhITSTMUeFFTL5XoPTtq+l+ZVWh8MJ0JQTxTE7HzQPtDn0nFFWsDsf/wMc3kkFZzUb7WW90rADu9B08mmI0OOkNjMyRmgE4n6A82CIdWPFsT9ElEJEN+vUnIzu0AUpW1I2bDkEhBGAEcMRTTWgMNx0gNcYBTZpChuEels1FsZd8g/3IgCYFYZmj/Ogkm3XPWcFKDWjMPI/Y2BEdKSzTFK0sUEupQo0hrbWf2mH1Q6km/ydNBi9Uc+ddPlIM3uVLBsx8FeIVgl5B9SxbsaT0wgPx9YEOxw5/354QQv7Cb8C1pnb2wru1qD9IKPT9nE+t+dBGUNa3o5viaGa7P4UGutzrNMwq7PWrhOVCkb23DB0qq0n8ftleetG/Q/QCoAYdbx8p72QnEILE32lFP53AEu0YfU5TaXElxqWbEGYTtunZsC4ioBZPJlVc4hTP283+sY/VpXCahyJ2x79Lj2VPEPUks7GVRAY3+4iT8G/yau0qY4XCoTS+kNI2UUMOisd5kiprHPSVtuCtmWWcrRgam243Y93MDmTOQB8aJO5Is5WjUf4rzYb90uvK31I1U3dx8qyXQwdKBew+uufCXDeLllPJ2i4YeY3efE0uz0cTJX+CHfA3PnKbOrQEfCNXKffnaohPmkBn6Ke5UxmyhMLevTs1Rp6ErMJkuv1tMSmFh0xKYLE9D+SxnfJmUTuS8C8PorhDq1Bl12obZTSlmpy0FRyGKYIChzST2OB25Phuut3zPI5+FT0+Ehi4WeR6qvhDq4FORWbcwYh6sYeCidkbyxP4ts9c+D0ggn2coz1TZuIEZ+abbObiiRXShkouBHx3/JSTZWHQ+2Il8srRxH0fCNc3NJoPsfOlsncnfa9f8uzTAIMQjfTzP0Thv4I9RLj01nZXjNRFAig77TMm6N/Hit/rKhm6OYSCX95mZH5NdTSxNfDc87Yw3gGVBMqaUYsfJ+PRv6IKvJrOxsYFMcN90IvvHRHQjcI8wQChS6UM6x7X6iMs2YSMEUd8zHCjeMu6cfMLbimXk4GoeqYh/qv3K5mqDBGwHwVH7rUZBxSNM7YvdRrPopPVqmwuidX9pp+QfSzA6hJjL+KAOTKm7zkO3vAO/jBerE26sCdhDg+eG6Qbk+u+W4a5847PVWEpsswg/TFu9JffVR8M1kmXiG1ei8wrgvFaXQ/JJwXMggxy7xarX/lyftuIXQ3m2w2eqlNBrLjPG5lmAxCQn6JMopx/qSk30Xh/rDt5KdtMtpoN6uOFrR/VGivhk6tBC9AhNiXgbV/VX5yahZE0sYumNWZiS/UqXd5F4jJwC3I65YXvchJKzjxdLLoiLMnRDxhCETDW966pY1wKyDggrx9z3poiXOu3ohUce1HmCOjSzsgPmzZDGazVSEsh+7OyuhbqBy6g3hvCYUsHhoHFypKIy7RpzFaqcGqMsW/up4b5Ea23+Je1QJ93k4lIdTJrGazsjE0NUZLlNlZh0af0tWmdxXmBW0Ts82WUNiHNU48RXgDle3Np1BEchk0/ng2RTEzRPvwwNCMSGqOX3ZVwn6Odr0JAot0TUn9k7trZFkBHS9KLYk/IW0IvomT8Y7Y8y+z+AtVtpiZwOlfnuln9p2nIyr3pTel5vwVsp+ws+YkU4W52lpJSKuz4X+5/BARMjjOT+0b4KIXcQ204Nm9tRxEENkE1BGoi5Wk3aJydWUa4d1I00x2cZmNPvWFNxgsv3dFf3KhuLZ4giKAREw6iFWMdVYalr464QTgV7uUumndtviAAlQERrecMek3uztiS5cvaRCcaToK6FOAD/RkJL7ALkpUYLoDob6bC6wcNJyzOs7nXUvJ1OFCCVs7iSRlEV4jAbgYrQSXvYNWA3ao3gBVtF5MEFgcRMHrSuBSMo/0ajjcmT+yEyyR0atOIIRlPhpu9A/fsx47wW3RY+JNSzVIsg7csLbJImHUKQ5aEH8tez/hlPt2Z7UQu08FZO9PxbgTvaW/B9vs4wFjGQETUTa5efg3IAOur/vpvymDsA+15f5dloOHo1lW1xwJzUHYMT2fhwzNvflCXVtvLy9pn4lUh/T/uM++GNrFnS1c2d+PUjbsTdsPpwDpnz7Sph5zG/J/9OTnE7op/A6wLxzapTvVXo/fXLvoYw2J6HTQf6kyhR9jQ3R61/AESh4GXLFgE4YIx66GZf2aeoFJKfug57MJGS8b8n+rCsgp+z7KT0L/o2r6kQN9bXJKfDqiPPDsoZffwwGMlwqKwZeRIoCTV0ttZhe+ZgbKp0QcJy5yOqB3Bkgtf4og2iC/IT77/dTVmInC3tOTrw7srDfLWfogOLUcdgks1j7KQpZ+vTL+c8atLqDHAfMANCOSGJUs9By0pvdV4UmDCHruh0bi8fmspjrgAZ33uNW4CM2noyMzEjLIPIbKJ9HAk22s5anP5VG9mw0Zi4egXLtoQ9pKkmUQfjWJjNGiKD9BEa0DfBm0T01IakSXx9TEud+nG9zVO4bwEF47B4c4GXl66Zl7k0I0KY6Ada0tykdEhcfqkXQ9T4cg9iTi+6SFNVHbgaCWXfpJqQSrmOWxrk7unWJupnVlnHLx2AvQRMGDeKKkQqu5XHUrmDFdos3R02QUPtPwOPOhwpv9ctPs5Hq35I7JpvtPcuDyqNRCnNzmxQA2gPkUSsTuFlhQK17hft04JY8w4RvCEb9IJT+FvL+vg/whYi9Ow7bSW7i2gY9Om3XQDgyOgFnESTkyDp9A0jIMCzNkC4g1IJH1qW6sGTWArWuHmTwuJ5op9mE1OXBSu32VXuM3oT7ZXlSwbG9FrJCgfdVEF2F1hiCYHi0e8XXP12GlZyjSgi7bnj3alliOcEDsbDV0sbHUjOPaAAlJVVXLsQsxM8fjJY1YAxC2gglIryVNjTWTXjV2EdZz2B7FqvRDc46v9D8gJHqGIFdtkHmBsaiQs0DPMxOsHXT4KFuvVJWPshx67citk9UFQRj1D10IKb5eNwwM/718L1/OOuWII7Ch13zOqCmXCn4BVaBPpK6IbebiooLMnqlJDAs9/QSbTeuPGtjw3TDgwmKg3rymCsAPp4CPiFbfSj6b9e24TueMvx1kP1l3QfsTqZAouq32zWK1roV+MQguIClrcg44erOMVfd9d0eP8Gd2qKQsbw2AfwZQo+V+03igWaBu6v71pa1E5ZemeoDLbxDvAc7kTAAdv2gCBobQiQBDcHB/kanJtgpwMnA5AAukYGpwBbbgAAAA",
  },
  {
    title: "E-Commerce Shop",
    description: "A full-featured e-commerce platform with product listings and shopping cart.",
    href: "https://github.com/XxomelxX/AD-Project1",
    imageSrc: "https://th.bing.com/th/id/OIP.Bf0Qcjw1-hqIN_dfipTwmAHaEM?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

export default function ProjectList() {
  return (
    <section className="mx-auto max-w-5xl space-y-6 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">My Project</h1>
      <p className="text-zinc-600 dark:text-zinc-300">Projects with GitHub links to the current portfolio work.</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article key={project.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900">
            {project.imageSrc && (
              <div className="mb-4 overflow-hidden rounded-xl">
                <Image
                  src={project.imageSrc}
                  width={400}
                  height={200}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">{project.description}</p>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
