module.exports = ({
	title,
	prompt,
	challengers,
	results,
	submission,
	placement,
} = {}) => `
  <div class="not-prose callout flex flex-col items-center justify-between gap-4 w-full px-5 py-4 my-8 text-white no-underline bg-purple-600">
    <p class="text-center font-semibold bg-purple-800 text-xs px-2 py-1 rounded-full" style="margin-top: -1.65rem">🏆&nbsp;${placement}</p>
    <p class="w-full text-center"><span class="font-bold uppercase text-sm">${title}</span><br><span class="text-2xl">“<em>${prompt}</em>”</span></p>
    <div class="flex flex-row justify-between grow shrink-0 gap-4 text-center text-sm md:text-base">
      <a href="${results}" target="_blank" class="border-2 border-white hover:bg-white px-4 py-2 font-bold">Results (${challengers} challengers)</a>
      <a href="${submission}" target="_blank" class="border-2 border-white hover:bg-white px-4 py-2 font-bold">My Submission</a>
    </div>
  </div>
`;