package sdaproject.server.resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.dto.ProductDTO;
import sdaproject.server.entity.ProductEntity;
import sdaproject.server.service.AbstractService;
import sdaproject.server.service.ProductService;

@RestController
@RequestMapping("api/product")
public class ProductResource extends AbstractResource<ProductEntity, ProductDTO> {

    private final ProductService productService;

    public ProductResource(ProductService productService) {
        this.productService = productService;
    }

    @Override
    public AbstractService<ProductEntity, ProductDTO> getService() {
        return productService;
    }



}