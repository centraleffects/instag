<?php
class ControllerErrorNotFound extends Controller {
	public function index() {
		$data = $this->load->language('error/not_found');

		$this->document->setTitle($this->language->get('heading_title'));

		$data['continue'] = $this->url->link('common/home');

		$data['header']         = $this->load->controller('common/header');
		$data['column_left']    = $this->load->controller('common/column_left');
		$data['column_right']   = $this->load->controller('common/column_right');
		$data['content_top']    = $this->load->controller('common/content_top');
		$data['content_bottom'] = $this->load->controller('common/content_bottom');
		$data['footer']         = $this->load->controller('common/footer');

		$this->response->addHeader($this->request->server['SERVER_PROTOCOL'] . ' 404 Not Found');

		$this->response->setOutput($this->load->view('error/not_found', $data));
	}
}