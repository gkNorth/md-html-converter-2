import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { NodeHtmlMarkdown } from 'node-html-markdown'
import { marked } from "marked";
import puppeteer from 'puppeteer';

type TextValue = {
  htmlValue: string
  isMdToHtml: boolean
}

type UrlValue = {
  url: string
}

const getMarkdownConvertedFromHtml = ({ reqValues }: { reqValues: TextValue }): string => {
  const md = NodeHtmlMarkdown.translate(reqValues.htmlValue);
  return md;
}
const getHtmlConvertedFromMarkdown = ({ reqValues }: { reqValues: TextValue }): string => {
  const html = marked.parse(reqValues.htmlValue);
  return html;
}

const getMarkDownConvertedFromWebPage = async ({
  reqValues
}: { reqValues: UrlValue }): Promise<string> => {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });
  const page = await browser.newPage();
  await page.goto(reqValues.url, { waitUntil: 'load', timeout: 0 });
  const html = await page.evaluate(() => document.documentElement.outerHTML)
  await browser.close();

  const md = NodeHtmlMarkdown.translate(html);
  return md;
}

export async function POST(req: Request, res: NextApiResponse) {
  const reqValues = await req.json()
  if (!reqValues) {
    res.send('エラーが発生しました。');
    return
  }
  let returnValue: string = '';
  const isUrl = !!reqValues?.url
  if (isUrl) {
    returnValue = await getMarkDownConvertedFromWebPage({ reqValues });
  } else {
    if (reqValues.isMdToHtml) {
      returnValue = getHtmlConvertedFromMarkdown({ reqValues });
    } else {
      returnValue = getMarkdownConvertedFromHtml({ reqValues });
    }
  }
  return NextResponse.json(returnValue);
}